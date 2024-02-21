import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import http from "../api/HttpConfig";
import { Alert } from "react-native";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            dataUser: action.dataUser
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      dataUser: []
    }
  );

  const bootstrapAsync = async () => {
    let userToken;
    let dataUser;
    try {
      await AsyncStorage.getItem("token",).then(async (token) => {
        await http
          .get(`/customers/${jwtDecode(token).userId}`)
          .then(async (response) => {
            dataUser = response.data.data;
            
          }).catch((error) => { 
            // Handle any errors that occur 
            
            console.error(error); 
        }); 
      }).catch((error) => { 
        // Handle any errors that occur 
        alert.Alert('no conection internet')
        console.error(error); 
    }); ;

      userToken = await AsyncStorage.getItem("token");
      // userId = jwtDecode(userToken).userId;

      // const response = await http.get(`/api/customers/${AsyncStorage.getItem("token")}`);
      // // const data = response.data;
    } catch (e) {
      // Restoring token failed
    }

    // After restoring token, we may need to validate it in production apps

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    dispatch({ type: "RESTORE_TOKEN", token: userToken, dataUser: dataUser });
  };
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    bootstrapAsync();
  }, [state.isSignout]);

  const authContext = useMemo(
    () => ({
      signIn: async (userToken) => {
        // userToken = await AsyncStorage.getItem("token");
        dispatch({ type: "SIGN_IN", token: userToken });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      refresh: () => bootstrapAsync(),
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...authContext, state }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
