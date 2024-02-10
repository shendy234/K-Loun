import React, { createContext, useContext, useEffect, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
const AuthContext = createContext({});

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    role: null,
  }


const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
              role: action.role
            };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
              role: action.role
            };
          case 'SIGN_OUT':
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
              role: null
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
            userToken = await SecureStore.getItemAsync('userToken');
          } catch (e) {
            // Restoring token failed
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
      }, []);



    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);

