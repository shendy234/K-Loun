import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={require("../../../assets/icon.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Andrew Ainsley</Text>
        <Text style={styles.email}>andrew_ainsley@yourdomain.com</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
         <View style={styles.pembungkus}>
          <Feather name="edit" size={24} color="gray" />
          <Text style={styles.optionText}>Edit Profile</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="bell" size={24} color="gray" />
          <Text style={styles.optionText}>Notification</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="dollar-sign" size={24} color="gray" />
          <Text style={styles.optionText}>Payment</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="lock" size={24} color="gray" />
          <Text style={styles.optionText}>Security</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="globe" size={24} color="gray" />
          <Text style={styles.optionText}>Language</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="info" size={24} color="gray" />
          <Text style={styles.optionText}>Privacy Policy</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <View style={styles.pembungkus}>
          <Feather name="help-circle" size={24} color="gray" />
          <Text style={styles.optionText}>Help Center</Text>
          </View>
          <View>
            <Text>saya</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  pembungkus:{
    flexDirection: "row",
    alignItems:"center"
  },
  options: {
    gap:17,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logout: {
    backgroundColor: 'red',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;