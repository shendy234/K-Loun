import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../store/AuthContext';

const ProfileScreen = () => {
  const { state, signOut } = useAuthContext();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageProfile, setImageProfile] = useState(null);

  useEffect(() => {
    handleProfile();

    // Add listener to refresh data when coming back from EditProfileScreen
    const unsubscribe = navigation.addListener('focus', () => {
      handleProfile();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const handleProfile = async () => {
    // Retrieve name and email from AsyncStorage
    setName(await AsyncStorage.getItem('name'));
    setEmail(await AsyncStorage.getItem('email'));
  
    // Retrieve the profile image URL from AsyncStorage
    const imageProfileURL = await AsyncStorage.getItem('imageProfile');
    setImageProfile(imageProfileURL ? { uri: imageProfileURL } : null);
  };
  

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    signOut();
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={imageProfile ? imageProfile : require("../../../assets/icon.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('HomeStack',{screen: 'EditProfile'}) }>
         <View style={styles.pembungkus}>
          <Feather name="edit" size={24} color="gray" />
          <Text style={styles.optionText}>Edit Profile</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('HomeStack',{screen: 'EditPassword'}) }>
        <View style={styles.pembungkus}>
          <Feather name="lock" size={24} color="gray" />
          <Text style={styles.optionText}>Update Password</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('HomeStack',{screen: 'TermAndCondition'}) }>
        <View style={styles.pembungkus}>
          <Feather name="info" size={24} color="gray" />
          <Text style={styles.optionText}>Term & Condition</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    padding: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  pembungkus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: Colors.BLACK,
  },
  logout: {
    backgroundColor: Colors.RED,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
    marginTop:230,
  },
  logoutText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;