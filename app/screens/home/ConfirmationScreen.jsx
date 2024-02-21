import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import Buttons from "../../components/Buttons";
import { useAuthContext } from "../../store/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import http from "../../api/HttpConfig";

const ConfirmationScreen = ({ navigation, route }) => {
  const dataUser = useAuthContext().state.dataUser;
  const serv = route.params;

  const [isLoading, setIsLoading] = useState(false);

  const confirmationHandle = async (userId, serviceId) => {
    setIsLoading(true);
    try {
      const response = await http.post(`/transaction`, {
        userId: userId,
        serviceId: serviceId,
      });

      console.log(response.data);

      if (response.data.statusCode === 200) {
        // navigation.navigate('HomeStack',{screen: 'Transaction'})
        navigation.replace("BottomTabNavigator", { screen: "Transactions" });
        Alert.alert( 'Booking Successful!',`You have successfully book the services. Please wait until Admin process.`);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Alert.alert(error);
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.rowContainer}>
            <Text
              style={{
                ...styles.columnLeft,
                fontWeight: "700",
                color: Colors.PRIMARY,
              }}
            >{`CONFIRMATION`}</Text>
            <Text style={styles.columnRight}>
              <MaterialCommunityIcons
                name="text-box-check-outline"
                size={24}
                color={Colors.PRIMARY}
              />
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.line} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Service`}</Text>
            <Text style={styles.columnRight}>{serv.name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Customer`}</Text>
            <Text style={styles.columnRight}>{dataUser.name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Date`}</Text>
            <Text style={styles.columnRight}>
              {new Date().toDateString(new Date())}
            </Text>
          </View>
          <View style={{ ...styles.rowContainer, alignItems: "flex-start" }}>
            <Text style={styles.columnLeft}>{`Address`}</Text>
            <Text style={styles.columnRight}>{dataUser.address}</Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerButton}>
        <Buttons
          isLoading={isLoading}
          color="blue"
          title="Confirmation"
          onPress={() => confirmationHandle(dataUser.id, serv.id)}
        />
      </View>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    elevation: 2,
    alignItems: "center",
    gap: 20,
    alignSelf: "flex-end",
    marginBottom: 300,
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnLeft: {
    fontSize: 12,
    color: "#424242",
  },
  columnRight: {
    color: "#616161",
    fontWeight: "800",
    fontSize: 13,
    maxWidth: "60%",
    textAlign: "right",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#EEE",
    borderBottomWidth: 1,
    width: "100%",
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
});
