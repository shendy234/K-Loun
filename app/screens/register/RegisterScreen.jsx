import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import http from '../../api/HttpConfig';
import { Feather } from '@expo/vector-icons';


export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [addressError, setAddressError] = React.useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    setUsernameError('');
    setPasswordError('');
    setEmailError('');
    setNameError('');
    setPhoneError('');
    setAddressError('');

    // Validation
    if (!username) {
      setUsernameError('Username is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }
    if (!email) {
      setEmailError('Email is required');
    }
    if (!name) {
      setNameError('Name is required');
    }
    if (!phone) {
      setPhoneError('Phone Number is required');
    }
    if (!address) {
      setAddressError('Address is required');
    }

    if (!username || !password || !email || !name || !phone || !address) {
      return;
    }
    http
      .post(`/api/auth/register`, {
        username,
        password,
        name,
        address,
        phone,
        email,
      })
      .then(async (res) => {
        setUsername('');
        setPassword('');
        setName('');
        setAddress('');
        setPhone('');
        setEmail('');
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/regis.png")}
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
      <Text style={styles.title}>Create Your Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => {
              setUsername(text);
              setUsernameError('');
            }}
        />
      </View>
      <Text style={styles.errorText}>{usernameError}</Text>
      <View style={styles.inputContainer}>
      <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError('');
                }}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
              </TouchableOpacity>
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
        />
        <Text style={styles.errorText}>{emailError}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setNameError('');
          }}
        />
        <Text style={styles.errorText}>{nameError}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => {
            const phoneNumber = text.replace(/[^0-9]/g, '');
            setPhone(phoneNumber);
            setPhoneError('');
          }}
          keyboardType="numeric"
          maxLength={12}
        />
        <Text style={styles.errorText}>{phoneError}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text) => {
            setAddress(text);
            setAddressError('');
          }}
        />
        <Text style={styles.errorText}>{addressError}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>Already have an account? <Text onPress={() => navigation.navigate("LoginScreen")} style={styles.signUpLink}>Sign In</Text></Text>
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
    marginTop:50,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
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
  iconContainer: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  button: {
    backgroundColor: Colors.BLACK,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    marginTop: 10,
  },
  signUpLink: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
