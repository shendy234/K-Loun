import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    id:'',
    password: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    handleUpdateProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedName = await AsyncStorage.getItem('name');
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPhone = await AsyncStorage.getItem('phoneNumber');
      const storedAddress = await AsyncStorage.getItem('address');
      const storedId = await AsyncStorage.getItem('id');
      const storedPassword = await AsyncStorage.getItem('password')

      setState({
        name: storedName,
        username: storedUsername,
        email: storedEmail,
        phone: storedPhone,
        address: storedAddress,
        id: storedId,
        password: storedPassword,
      });
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  const handleChange = (name, text) => {
    setState((prevState) => ({ ...prevState, [name]: text }));
  };

  const handleUpdateProfileData = async () => {
    try {
    const res = await axios.put(`http://10.10.100.202:8090/api/customers`, {
      id: state.id,  // Update with your actual id field
      username: state.username,
      password: state.password,
      email: state.email,
      name: state.name,
      phone: state.phone,
      address: state.address,
      });

      await AsyncStorage.setItem('name', state.name);
      await AsyncStorage.setItem('username', state.username);
      await AsyncStorage.setItem('email', state.email);
      await AsyncStorage.setItem('phoneNumber', state.phone);
      await AsyncStorage.setItem('address', state.address);
      console.log('Profile Updated Successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={state.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={state.username}
        onChangeText={(text) => handleChange('username', text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={state.email}
        onChangeText={(text) => handleChange('email', text)}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={state.phone}
        onChangeText={(text) => handleChange('phone', text)}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={state.address}
        onChangeText={(text) => handleChange('address', text)}
      />

      <TouchableOpacity style={styles.update} onPress={handleUpdateProfileData}>
        <Text style={styles.updateText}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.update} onPress={() => navigation.navigate("ProfileScreen")}>
        <Text style={styles.updateText}>Back</Text>
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

export default EditProfileScreen;
