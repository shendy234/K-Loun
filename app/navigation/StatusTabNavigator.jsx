import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TransactionScreen from "../screens/TransactionScreen";
import ActiveOrderScreen from "../screens/TransactionScreen/ActiveOrderScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Utils/Colors";

const Tab = createMaterialTopTabNavigator();

const StatusTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "ActiveOrder") {
            iconName = focused ? "checkmark-circle-sharp" : "checkmark-circle-outline";
          } else if (route.name === "History") {
            iconName = focused ? "time" : "time-outline";
          } 

          return  <Ionicons name={iconName} size={24} color={color} />
        
        },
        tabBarLabelStyle: { fontSize: 12, textTransform: "none",},
        tabBarItemStyle: { flexDirection: "row" },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIndicatorStyle: {backgroundColor: Colors.PRIMARY}
      })}
    >
      <Tab.Screen
        name="ActiveOrder"
        component={ActiveOrderScreen}
        options={{
          title: "Active Order",
        }}
      />
      <Tab.Screen
        name="History"
        component={TransactionScreen}
        options={{
          title: "History",
        }}
      />
    </Tab.Navigator>
  );
};

export default StatusTabNavigator;
