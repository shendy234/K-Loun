
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import ForgotPasswordScreen from '../screens/login/ForgotPassword';


const Stack = createNativeStackNavigator();

const AuthStackNavigatitor = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="ForgetPasswordScreen" component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default AuthStackNavigatitor;