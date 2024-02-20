import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../api/HttpConfig';
import { useNavigation } from '@react-navigation/native';

const EditPasswordScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await handleUpdatePassword();
    };
    fetchData();
  }, []);

  const handleUpdatePassword = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      setState((prevState) => ({ ...prevState, username: storedUsername }));
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  const handleChange = (name, text) => {
    setState((prevState) => ({ ...prevState, [name]: text }));
    setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear previous error messages
  };

  const handleUpdatePasswordData = async () => {
    try {
      if (!state.oldPassword || !state.newPassword) {
        setErrorMessages({
          oldPassword: !state.oldPassword ? 'Old Password is required.' : '',
          newPassword: !state.newPassword ? 'New Password is required.' : '',
        });
        return;
      }

      const res = await http.put('/api/auth/reset-password', {
        username: state.username,
        oldPassword: state.oldPassword,
        newPassword: state.newPassword,
      });

      console.log('Password Updated Successfully:', res.data);
      setState({
        username: '',
        oldPassword: '',
        newPassword: '',
      });

      navigation.goBack();
    } catch (error) {
      console.error('Error updating Password:', error);
    }
  };

  return (
    <ImageBackground source={require('../../../assets/images/regis.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>Old Password:</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Old Password"
            secureTextEntry={!showOldPassword}
            value={state.oldPassword}
            onChangeText={(text) => handleChange('oldPassword', text)}
            clearTextOnFocus={true} // Clear the text input when focused
          />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowOldPassword(!showOldPassword)} // Toggle showPassword state
        >
          <Feather name={showOldPassword ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
        </View>
        <Text style={styles.errorMessage}>{errorMessages.oldPassword}</Text>

        <Text style={styles.label}>New Password:</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="New Password"
            secureTextEntry={!showNewPassword}
            value={state.newPassword}
            onChangeText={(text) => handleChange('newPassword', text)}
            clearTextOnFocus={true} // Clear the text input when focused
          />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowNewPassword(!showNewPassword)} // Toggle showPassword state
        >
          <Feather name={showNewPassword ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
        </View>
        <Text style={styles.errorMessage}>{errorMessages.newPassword}</Text>

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePasswordData}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    marginBottom: 15,
    color: Colors.BLACK,
  },
  iconContainer: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
  label: {
    right: 10,
    alignItems:"center",
    marginTop:-20,
  },
  updateButton: {
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 5,
  },
});

export default EditPasswordScreen;
