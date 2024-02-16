
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StatusTabNavigator from './StatusTabNavigator';

const Stack = createNativeStackNavigator();

const TransactionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={StatusTabNavigator}/>
    </Stack.Navigator>
  );
};

export default TransactionStackNavigator;