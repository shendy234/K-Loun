import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TransactionScreen from "../screens/TransactionScreen";

const Tab = createMaterialTopTabNavigator();

const StatusTabNavigator = () => {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Status 1" component={TransactionScreen} />
      <Tab.Screen name="Status 2" component={TransactionScreen} />
      <Tab.Screen name="Status 3" component={TransactionScreen} />
      <Tab.Screen name="Status 4" component={TransactionScreen} />
    </Tab.Navigator>
  );
};

export default StatusTabNavigator;
