import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import {formatIDRCurrency} from "../../Utils/FormatIdr"

import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttons from "../../components/Buttons";

const DetailServiceScreen = ({ navigation, route }) => {
  const serv = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <Text style={styles.price}>{formatIDRCurrency(serv.price)}</Text>
              <Text style={{ fontWeight: 700 }}> /1Kg</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                borderColor: "#EEE",
                borderBottomWidth: 1,
              }}
            />
            <Text style={styles.description}>{serv.description}</Text>
          </View>
          {/* <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity> */}
        </ScrollView>
        <View style={styles.containerButton}>
          <Buttons isLoading={false} color="blue" title="Book Now" onPress={() => navigation.navigate('HomeStack',{screen: 'ConfirmationBooking', params : serv}) }/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerScroll: {
    marginBottom: 106,
  },
  containerText: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.BLACK,
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
  backButton: {
    position: "absolute",
    height: 50,
    width: 50,
    left: 24,
    top: 24,
  },
});
