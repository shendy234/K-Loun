import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
// import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TransactionStackNavigator from './TransactionStackNavigator';
import AutoHeightImage from 'react-native-auto-height-image';
import HomeStackNavigator from './HomeStackNavigator';

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
          headerTitle:""       
        }}
        />
      <Tab.Screen name="Transactions" component={TransactionStackNavigator} options={{
          headerTitle:""       
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerTitle:""       
        }} />
    </Tab.Navigator>
  );
};

// const TopTabs = createMaterialTopTabNavigator();

// const TopTabStatus = () => {
//     <TopTabs.Navigator
//       screenOptions={{
//         tabBarLabelStyle: {
//           textTransform: "capitalize",
//           fontWeight: "bold",
//         },
//         tabBarIndicatorStyle: {
//           height: 5,
//           borderRadius: 5,
//           backgroundColor: "#1DA1F2",
//         },
//       }}
//     >
//       <TopTabs.Screen
//         name="main"
//         component={TransactionScreen}
//         options={{
//           tabBarLabel: "Feed",
//         }}
//       />
//       <TopTabs.Screen name="Status 1" component={Payments} />
//       <TopTabs.Screen name="Status 2" component={Payments} />
//     </TopTabs.Navigator>
// }

export default BottomTabNavigator;