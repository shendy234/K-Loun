import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=>{
    handleProfile()
  })

  const handleProfile = async () => {
    setName(await AsyncStorage.getItem("name"))
    setEmail(await AsyncStorage.getItem("email"))
  }
    

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("LoginScreen");
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={require("../../../assets/icon.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("EditProfile")}>
         <View style={styles.pembungkus}>
          <Feather name="edit" size={24} color="gray" />
          <Text style={styles.optionText}>Edit Profile</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="bell" size={24} color="gray" />
          <Text style={styles.optionText}>Notification</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="dollar-sign" size={24} color="gray" />
          <Text style={styles.optionText}>Payment</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("EditPassword")}>
        <View style={styles.pembungkus}>
          <Feather name="lock" size={24} color="gray" />
          <Text style={styles.optionText}>Security</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="globe" size={24} color="gray" />
          <Text style={styles.optionText}>Language</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="info" size={24} color="gray" />
          <Text style={styles.optionText}>Privacy Policy</Text>
          </View>
          <View>
          <AntDesign name="right" size={16} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="help-circle" size={24} color="gray" />
          <Text style={styles.optionText}>Help Center</Text>
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
    backgroundColor: Colors.THIRD,
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
    backgroundColor: "red",
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;