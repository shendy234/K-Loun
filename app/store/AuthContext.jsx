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

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  // const [token, setToken] = useState(null);
  // const [authenticated, setAuthenticated] = useState(false);
  // const [userId, setUserId] = useState(undefined);

  // useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   const bootstrapAsync = async () => {
  //     let userToken;

  //     try {
  //       console.log('cek')
  //       userToken = await AsyncStorage.getItem("token");
  //       setToken(userToken);
  //       const decoded = jwtDecode(token);
  //       setUserId(decoded.userId);
  //     console.log(authenticated)
  //       if(userToken){
  //         setAuthenticated = true;
  //       }
  //     } catch (e) {
  //       // Restoring token failed
  //     }
  //   };

  //   bootstrapAsync();
  // }, [token, authenticated]);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
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
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("token");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, [state.isSignout]);

  const authContext = useMemo(
    () => ({
      signIn: async (userToken) => {
        // userToken = await AsyncStorage.getItem("token");
        dispatch({ type: "SIGN_IN", token: userToken });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" })
    }),
    []
  );


  return (
    <AuthContext.Provider
      value={{...
        authContext, 
        state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
