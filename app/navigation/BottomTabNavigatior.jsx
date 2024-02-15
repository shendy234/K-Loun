import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import TransactionStackNavigator from './TransactionStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

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
        headerLeft: () => (<AutoHeightImage source={require('../../assets/logo.png')} width={130} style={{margin:10}}/>),
        contentStyle: {backgroundColor: 'white'} 
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
          headerTitle:"",       
          headerShown: false
        }}
        />
      {/* <Tab.Screen name="Transactions" component={TransactionStackNavigator} options={{
          headerTitle:""       
        }} /> */}
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{
          headerTitle:"",   
          headerShown: false    
        }} />
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;