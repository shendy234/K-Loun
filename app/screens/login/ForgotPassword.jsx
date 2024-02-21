import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import http from '../../api/HttpConfig';
import Colors from '../../Utils/Colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleForgotPassword = async () => {
    try {
      const response = await http.post(`/api/auth/forgot-password`, {
        email,
      });
      if (response.status === 200) {
        Alert.alert('Success', 'Password recovery email sent successfully!', [{ text: 'OK' }]);
      } else {
        console.log('Password recovery failed with status code:', response.status);
        Alert.alert('Error', 'Password recovery failed. Please try again later.', [{ text: 'OK' }]);
      }
    } catch (error) {
      console.error('Error during password recovery:', error.message);
      Alert.alert('Error', 'Password recovery failed. Please try again later.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/regis.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.containerLogo}>
          <Image
          source={require("../../../assets/images/icon4.png")}
          style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
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
  },
  logo: {
    resizeMode: "stretch",
    height: 60,
    width: 300,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  inputContainer: {
    width: '80%',
    marginBottom: 5,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: Colors.BLACK,
    paddingVertical: 12, 
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  containerLogo:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default ForgotPasswordScreen;