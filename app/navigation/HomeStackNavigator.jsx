import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailServiceScreen from "../screens/home/DetailServiceScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import DetailTransactionScreen from "../screens/TransactionScreen/DetailTransactionScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";
import EditPasswordScreen from "../screens/profile/EditPassword";
import ConfirmationScreen from "../screens/home/ConfirmationScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="DetailService" component={DetailServiceScreen} options={{title: "Service", headerShown: true}}/>
      <Stack.Screen
        name="DetailTransaction"
        component={DetailTransactionScreen}
      />
      <Stack.Screen
        name="ConfirmationBooking"
        component={ConfirmationScreen}
        options={{
          title: "Confirmation Booking",
          headerShown: true
        }}
      />
      <Stack.Screen name="Edit" component={DetailTransactionScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="EditPassword" component={EditPasswordScreen} options={{
        headerShown: true
      }} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
