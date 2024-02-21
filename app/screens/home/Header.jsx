import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Colors from "../../Utils/Colors";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import "core-js/stable/atob";
import { useEffect, useState } from "react";
import http from "../../api/HttpConfig";


export default function Header() {
  const [username, setUsername] = useState("");
  

  useEffect(() => {
    handleHeader()
  }, [])

  const handleHeader = async () => {
      const token = await AsyncStorage.getItem("token")
      const decodedToken = jwtDecode(token);
        const userCredentialId = decodedToken.sub;
        console.log(userCredentialId);
        const resUserInfo = await http.get(`/users?userCredentialId=${userCredentialId}`);
        console.log(resUserInfo.data.data)
        if (resUserInfo && resUserInfo.data) {
          const username = resUserInfo.data.data.userCredential.username
          await AsyncStorage.setItem("username", username)
          await AsyncStorage.setItem("password", resUserInfo.data.data.userCredential.password)
          await AsyncStorage.setItem("id", resUserInfo.data.data.id)
          await AsyncStorage.setItem("name", resUserInfo.data.data.name)
          await AsyncStorage.setItem("email", resUserInfo.data.data.email)
          await AsyncStorage.setItem("phoneNumber", resUserInfo.data.data.phone)
          await AsyncStorage.setItem("address", resUserInfo.data.data.address)
          setUsername(username);
          
        }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
        <Image
          source={require("../../../assets/LogoPutih.png")}
          style={styles.userImage}
        />
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>{username}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    
  },
  userName: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  welcomeText: {
    color: "white",
    fontSize: 14,
  },
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.THIRD,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profileMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    fontSize: 16,
  },
  searchBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
});