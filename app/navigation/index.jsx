import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./TransactionStackNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigatior";
import AuthStackNavigatitor from "./AuthStackNavigator";


const Stack = createNativeStackNavigator();

let stackScreen = null;

// if
// const Navigation = () => {

// }

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <StackNavigation/> */}
      <AuthStackNavigatitor/>
      {/* <BottomTabNavigator>
      </BottomTabNavigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
