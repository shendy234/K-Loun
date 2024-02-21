import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../store/AuthContext';
import http from '../../api/HttpConfig';
import { BASE_HOST } from '../../api/BaseUrl';

const EditProfileScreen = () => {
  const { refresh } = useAuthContext();
  const navigation = useNavigation();
  const [state, setState] = useState({
    id:'',
    password: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    imageProfile:'',
  });

  const [imageProfile, setImageProfile] = useState(null);
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [dataUser, setDataUser] = useState('');

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
      const storedPassword = await AsyncStorage.getItem('password');
      const storedImageProfile = await AsyncStorage.getItem('imageProfile');

      setState({
        name: storedName,
        username: storedUsername,
        email: storedEmail,
        phone: storedPhone,
        address: storedAddress,
        id: storedId,
        password: storedPassword,
        imageProfile: storedImageProfile,
      });
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  const handleChange = (name, text) => {

    let formattedText = text;

    if (name === 'phone') {
      formattedText = text.replace(/[^0-9]/g, '');
      formattedText = formattedText.substring(0, 12);
    }
    setState((prevState) => ({ ...prevState, [name]: formattedText }));
  };

  const validateForm = () => {
    let isValid = true;

    setNameError('');
    setUsernameError('');
    setEmailError('');
    setPhoneError('');
    setAddressError('');

    if (!state.name) {
      setNameError('Name is required');
      isValid = false;
    }
    if (!state.username) {
      setUsernameError('Username is required');
      isValid = false;
    }
    if (!state.email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(state.email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }
    if (!state.phone) {
      setPhoneError('Phone is required');
      isValid = false;
    } else if (isNaN(state.phone)) {
      setPhoneError('Phone must be numeric');
      isValid = false;
    }
    if (!state.address) {
      setAddressError('Address is required');
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleUpdateProfileData = async () => {
    try {
      if (validateForm()) {
        const res = await http.put(`/customers`, {
          id: state.id,
          username: state.username,
          password: state.password,
          email: state.email,
          name: state.name,
          phone: state.phone,
          address: state.address,
          imageProfile: state.imageProfile,
        });

        await AsyncStorage.setItem('name', state.name);
        await AsyncStorage.setItem('username', state.username);
        await AsyncStorage.setItem('email', state.email);
        await AsyncStorage.setItem('phoneNumber', state.phone);
        await AsyncStorage.setItem('address', state.address);
        await AsyncStorage.setItem('imageProfile', state.imageProfile);
        console.log('Profile Updated Successfully');

        refresh();
        // Navigate back to ProfileScreen and trigger the focus event
        navigation.navigate('ProfileScreen');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };



  const pickImage = async () => {
    try {
      console.log('Attempting to pick image...');
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log('Image picking result:', result);
  
      if (!result.canceled) {
        // Access the URI from the assets array
        const pickedImageUri = result.assets[0]?.uri;
  
        if (pickedImageUri) {
          console.log('Image picked successfully:', pickedImageUri);
          setImageProfile(pickedImageUri);
        } else {
          console.error('Failed to retrieve the image URI from the result.');
        }
      } else {
        console.log('Image picking canceled by the user.');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };
  
  
  

  const handleSaveImage = async () => {
    try {
      console.log("idnya :" + state.id);
      console.log("image :" + imageProfile);
  
      if (!imageProfile) {
        console.error('Image not selected.');
        return;
      }
  
      const formData = new FormData();
      formData.append('imageProfile', {
        uri: imageProfile,
        type: 'image/jpeg', // Specify the correct image type
        name: 'profile_image.jpg', // Specify a valid image name with the correct extension
      });
  
      const response = await fetch(`${BASE_HOST}/customers/${state.id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          // Add any necessary headers here, e.g., authorization token
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.ok) {
        const imageUrl = imageProfile;
  
        if (imageUrl) {
          await AsyncStorage.setItem('imageProfile', imageUrl);
          console.log('Image uploaded successfully.');
        } else {
          console.error('Image URL is undefined or null in the server response.');
        }
      } else {
        // Check for non-successful HTTP response status
        console.error('Error uploading image. Server response:', response.status, response.statusText);
        console.log()
        throw new Error('Image upload failed.');
      }
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };
  

  return (
    <>
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.update} onPress={pickImage}>
        <Text style={styles.updateText}>Pick Image</Text>
      </TouchableOpacity>

        {imageProfile && (
          <Image source={{ uri: imageProfile }} style={{ width: 80, height: 80, marginBottom: 10, borderRadius: 40, alignItems:"center" }} />
        )}

        <TouchableOpacity style={styles.update} onPress={handleSaveImage}>
          <Text style={styles.updateText}>Save Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={state.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          <Text style={styles.errorText}>{nameError}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={state.username}
            onChangeText={(text) => handleChange('username', text)}
            editable={false}
          />
          <Text style={styles.errorText}>{usernameError}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={state.email}
            onChangeText={(text) => handleChange('email', text)}
            editable={false}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            value={state.phone}
            onChangeText={(text) => handleChange('phone', text)}
            keyboardType="numeric"
            maxLength={12}
          />
          <Text style={styles.errorText}>{phoneError}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={state.address}
            onChangeText={(text) => handleChange('address', text)}
          />
          <Text style={styles.errorText}>{addressError}</Text>
        </View>

        <TouchableOpacity style={styles.update} onPress={handleUpdateProfileData}>
          <Text style={styles.updateText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: Colors.PRIMARY,
  },
  headerText: {
    fontSize: 20,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.THIRD,
    height: "100%"
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 50,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  update: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  updateText: {
    color: Colors.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;