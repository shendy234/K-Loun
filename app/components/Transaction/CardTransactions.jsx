import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import State from "../State";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import {formatIDRCurrency} from "../../Utils/FormatIdr"

const CardTransactions = ({ item }) => {
  const navigation = useNavigation();
  // console.log(item)
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailTransaction", {userId: item.id});
      }}
      key={item.id}
      style={styles.serviceContainer}
    >
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/images/loundry-service.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.date}>{new Date().toDateString(item.startDate)}</Text>
        <Text style={styles.title}>{item.service.name}</Text>
        <State indicator={item.status.indicator} text={item.status.name} />
        <Text style={styles.price}>{item.totalPrice?formatIDRCurrency(item.totalPrice):""}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTransactions;

const styles = StyleSheet.create({
  serviceContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    marginBottom: 20,
    elevation: 1,
    marginHorizontal: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  price: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  featuredSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  date: {
    color: "white",
    fontSize: 9,
    alignSelf: "flex-end",
    marginBottom: 7,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 4,
  },
});
