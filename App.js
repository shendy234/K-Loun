import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./app/navigation";
import "react-native-gesture-handler";
import AuthContextProvider from "./app/store/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}