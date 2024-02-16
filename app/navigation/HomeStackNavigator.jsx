
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailServiceScreen from '../screens/home/DetailServiceScreen';
import BottomTabNavigator from './BottomTabNavigator';
import DetailTransactionScreen from '../screens/TransactionScreen/DetailTransactionScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import EditPasswordScreen from '../screens/profile/EditPassword';


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>
        <Stack.Screen name="DetailService" component={DetailServiceScreen}/>
        <Stack.Screen name="DetailTransaction" component={DetailTransactionScreen}/>
        {/* <Stack.Screeen name="" */}
        <Stack.Screen name="Edit" component={DetailTransactionScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        <Stack.Screen name="EditPassword" component={EditPasswordScreen}/>        
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;