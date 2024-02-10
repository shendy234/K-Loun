
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailServiceScreen from '../screens/HomeScreen/DetailServiceScreen';


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DetailService" component={DetailServiceScreen}/>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;