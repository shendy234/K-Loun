import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import State from "../../components/State";
import Buttons from "../../components/Buttons";
import http from "../../api/HttpConfig";
import { formatDateTime } from "../../Utils/FormatDateTime";
import { formatIDRCurrency } from "../../Utils/FormatIdr";

const DetailTransactionScreen = ({ navigation, route }) => {
  const userId = route.params.userId;

  const [isLoading, setIsLoading] = useState(true);
  const [transaction, setTransactions] = useState(null);

  console.log("t", transaction);

  const getUserHandle = async () => {
    try {
      const response = await http.get(`/transaction/${userId}`);
      // setIsLoading(true);
      setTransactions(response.data.data);

      setIsLoading(false);

      if (response.data.statusCode === 200) {
        // navigation.navigate('HomeStack',{screen: 'Transaction'})
        // navigation.replace("BottomTabNavigator", { screen: "Transactions" });
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Alert.alert(error);
    }

    setIsLoading(false);
  };

  const cancelHandle = async () => {
    setIsLoading(true);

    try {
      await http.put(`transaction/cancel`, {
        id: transaction.id,
      });
    } catch (error) {
      Alert.alert(error);
    }
    Alert.alert(
      "Booking Canceled!",
      `You have successfully cancel book the services. Admin will not process your booking.`
    );
    getUserHandle();
    setIsLoading(false);
  };

  const acceptHandle = async () => {
    setIsLoading(true);
    try {
      await http.put(`api/transaction/confirm-accept`, {
        id: transaction.id,
      });
    } catch (error) {
      Alert.alert(error);
    }

    Alert.alert(
      "Completed!",
      `You have successfully completed your order services. Thanks.`
    );
    getUserHandle();
    setIsLoading(false);
  };

  useEffect(() => {
    getUserHandle();
  }, [isLoading]);

  return isLoading ? (
    <ActivityIndicator
      style={{ margin: 20 }}
      size="large"
      color={Colors.PRIMARY}
    />
  ) : (
    <View>
      <ScrollView style={{ marginBottom: 90 }}>
        <View style={styles.cardContainer}>
          <View style={styles.rowContainer}>
            <Text
              style={{ ...styles.columnLeft, fontSize: 16, fontWeight: "600" }}
            >
              {transaction.service.name}
            </Text>
            <State
              indicator={transaction.status.indicator}
              text={transaction.status.name}
            />
          </View>
          <View style={styles.rowContainer}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#EEE",
                borderBottomWidth: 1,
                width: "100%",
              }}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`No.Trx`}</Text>
            <Text style={styles.columnRight}>{transaction.id}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Customer`}</Text>
            <Text style={styles.columnRight}>{transaction.user.name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Date & Time`}</Text>
            <Text style={styles.columnRight}>{`${formatDateTime(
              transaction.startDate
            )}`}</Text>
          </View>
          {transaction.finishDate ? (
            <View style={styles.rowContainer}>
              <Text style={styles.columnLeft}>{`Date & Time Finish`}</Text>
              <Text style={styles.columnRight}>{`${formatDateTime(
                transaction.finishDate
              )}`}</Text>
            </View>
          ) : null}
          <View style={{ ...styles.rowContainer, alignItems: "flex-start" }}>
            <Text style={styles.columnLeft}>{`Pick-Up Address`}</Text>
            <Text style={styles.columnRight}>{transaction.user.address}</Text>
          </View>
        </View>

        {/* BIll */}
        <View style={{ ...styles.cardContainer, marginBottom: 24 }}>
          <View style={styles.rowContainer}>
            <Text
              style={{
                ...styles.columnLeft,
                width: "100%",
                fontSize: 16,
                fontWeight: "600",
              }}
            >{`Bill`}</Text>
            {/* <State /> */}
          </View>
          <View style={styles.rowContainer}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#EEE",
                borderBottomWidth: 1,
                width: "100%",
              }}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Price`}</Text>
            <Text style={styles.columnRight}>
              {formatIDRCurrency(transaction.service.price)}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.columnLeft}>{`Weight`}</Text>
            <Text style={styles.columnRight}>{transaction.weight} Kg</Text>
          </View>
          <View style={styles.rowContainer}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#EEE",
                borderBottomWidth: 1,
                width: "100%",
              }}
            />
          </View>
          <View style={{ ...styles.rowContainer }}>
            <Text style={styles.columnLeft}>{`Total Amount`}</Text>
            <Text
              style={{
                ...styles.columnRight,
                fontSize: 18,
                color: Colors.PRIMARY,
              }}
            >
              {formatIDRCurrency(transaction.totalPrice)}
            </Text>
          </View>
        </View>
      </ScrollView>
      {transaction.status.name == "waiting" ? (
        <View style={styles.containerButton}>
          <Buttons
            isLoading={isLoading}
            color="red"
            title="cancel"
            onPress={cancelHandle}
          />
        </View>
      ) : null}

      {transaction.status.name == "delivery" ? (
        <View style={styles.containerButton}>
          <Buttons
            isLoading={isLoading}
            color="green"
            title="Accept"
            onPress={acceptHandle}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DetailTransactionScreen;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    elevation: 1,
    alignItems: "center",
    gap: 20,
    alignSelf: "flex-end",
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
    fontWeight: "600",
    fontSize: 13,
    maxWidth: "60%",
    textAlign: "right",
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
