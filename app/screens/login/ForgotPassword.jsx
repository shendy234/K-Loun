import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import Colors from '../../Utils/Colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!username || !password) {
      console.log("Please enter both username and password");
      return;
    }
  
    try {
      const res = await axios.post(`http://10.10.100.202:8090/api/auth/login`, {
        username,
        password,
      });
  
      if (res && res.data && res.data.token) {
        setUsername("");
        setPassword("");
        // console.log(res.data)
        await AsyncStorage.setItem("token", res.data.token);
  
        if (res.data.data) {
          await AsyncStorage.setItem("role", res.data.data.role);
        }
  
        if (res.data.username) {
          await AsyncStorage.setItem("username", res.data.username);
        }
        Alert.alert("Login Successful", "You have successfully logged in.");
        // navigation.navigate("HomeScreen");
        navigation.navigate("ProfileScreen");

      } else {
        console.log("Unexpected server response:", res);
        Alert.alert("Login Failed", "Unexpected server response. Please try again.");
      }
  
    } catch (err) {
      console.log(err);
      Alert.alert("Login Failed", "Invalid username or password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/login.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView>
        <View style={styles.containerLogo}>
          <Image
          source={require("../../../assets/images/icon4.png")}
          style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login to your Account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPassword} onPress={() => navigation.navigate("ForgetPasswordScreen")}>Forgot your password?</Text>
          <Text style={styles.signUpText}>Don't have an account? <Text onPress={() => navigation.navigate("RegisterScreen")} style={styles.signUpLink}>Sign Up</Text></Text>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo:{
    resizeMode: "stretch",
    height:60,
    width:300,
    marginTop:120,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,

  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    opacity: 0.9,
    elevation: 25,
    // marginBottom:120
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',
  },
  button: {
    backgroundColor: Colors.BLACK,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: 'black',
    marginVertical: 10,
  },
  signUpText: {
    marginTop: 10,
    color: 'black',
  },
  signUpLink: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});
