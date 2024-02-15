import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Import axios if not already done
import { useNavigation } from '@react-navigation/native';

const EditPasswordScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
  });

  // useEffect(() => {
  //   const getUsername = async () => {
  //     try {
  //       const storedUsername = await AsyncStorage.getItem('username');
  //       if (storedUsername) {
  //         setState((prevState) => ({ ...prevState, username: storedUsername }));
  //       }
  //     } catch (error) {
  //       console.error('Error fetching username from AsyncStorage:', error);
  //     }
  //   };

  //   getUsername();
  // }, []);

  useEffect(() => {
    handleUpdatePassword();
  }, []);

  const handleUpdatePassword = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedOldPassword = await AsyncStorage.getItem('oldPassword');
      const storedNewPassword = await AsyncStorage.getItem('newPassword');
    
      setState({
        username: storedUsername,
        oldPassword: storedOldPassword,
        newPassword: storedNewPassword,
      });
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };
  

  const handleChange = (name, text) => {
    setState((prevState) => ({ ...prevState, [name]: text }));
  };

  const handleUpdatePasswordData = async () => {
    try {
      // const { username, oldPassword, newPassword } = state;

      const res = await axios.put('http://10.10.100.202:8090/api/auth/reset-password', {
        username: state.username,
        oldPassword: state.oldPassword,
        newPassword: state.newPassword,
      });

      await AsyncStorage.setItem('username', state.username);
      await AsyncStorage.setItem('oldPassword', state.oldPassword);
      await AsyncStorage.setItem('newPassword', state.newPassword);

      console.log('Password Updated Successfully:', res.data);
    } catch (error) {
      console.error('Error updating Password:', error);
    }
  };


  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      secureTextEntry
      value={state.oldPassword}
      onChangeText={(text) => handleChange('oldPassword', text)}
    />


      <Text style={styles.label}>New Password:</Text>
      <TextInput
      style={styles.input}
      secureTextEntry
      value={state.newPassword}
      onChangeText={(text) => handleChange('newPassword', text)}
    />

      {/* <Text style={styles.label}>Confirm New Password:</Text> */}
      {/* <TextInput
        style={styles.input}
        secureTextEntry
        value={state.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      /> */}

      <TouchableOpacity style={styles.update} onPress={handleUpdatePasswordData}>
        <Text style={styles.updateText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.THIRD,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    marginBottom: 15,
  },
  update: {
    backgroundColor: 'white',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  updateText: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditPasswordScreen;
