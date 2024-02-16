import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import ProfileStackNavigator from './ProfileStackNavigator';
import HomeScreen from '../screens/home/HomeScreen';
import StatusTabNavigator from './StatusTabNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Transactions") {
            iconName = focused ? "receipt" : "receipt-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        contentStyle: {backgroundColor: 'white'} 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          headerTitle:"",       
          headerShown: false
        }}
        />
      <Tab.Screen name="Transactions" component={StatusTabNavigator} options={{
          headerTitle:""       
        }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{
          headerTitle:"",   
          headerShown: false    
        }} />
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;