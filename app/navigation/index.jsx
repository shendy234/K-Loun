import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./AuthStackNavigator";
import { useAuthContext } from "../store/AuthContext";
import HomeStackNavigator from "./HomeStackNavigator";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {state} = useAuthContext();
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
            name="HomeStack"
            component={HomeStackNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
