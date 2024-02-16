import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";


const DetailServiceScreen = ({navigation, route}) => {
  const serv = route.params
  console.log("serv "+serv);
  console.log(serv.name);
  return (
    <SafeAreaView style={{flex:1}}>
       <StatusBar
        translucent={false}
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      /> 
      <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
      <Image
        source={require("../../../assets/images/loundry-service.png")}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{serv.name}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>Rp. {serv.price}</Text>
          <Text style={{ fontWeight: 700 }}> /1Kg</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            borderColor: "#EEE",
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.description}>
          {serv.description}
        </Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

export default DetailServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerScroll: {
    marginBottom: 106
  },
  containerText: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.BLACK
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.PRIMARY,
  },

  description: {
    marginTop: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
  containerButton: {
    flex: 1,
    padding: 24,
    borderColor: "#EEE",
    backgroundColor: "white",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  },
  button: {
    height: 58,
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    letterSpacing: 0.2,
  },
  backButton: {
    position: "absolute",
    height: 50,
    width: 50,
    left:24,
    top:24,
    
  },
});
