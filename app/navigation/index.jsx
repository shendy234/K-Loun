import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./AuthStackNavigator";
import { useAuthContext } from "../store/AuthContext";
import BottomTabNavigator from "./BottomTabNavigatior";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {state} = useAuthContext();

  console.log('te')

  console.log(state.isSignout);
  console.log(state.userToken);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.userToken == null ? (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
