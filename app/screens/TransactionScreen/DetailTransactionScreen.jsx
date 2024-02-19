import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import State from "../../components/State";

const DetailTransactionScreen = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
        <Text style={{...styles.columnLeft, fontSize:16, fontWeight: "600"}}>{`Cuci Bersih (3 hari)`}</Text>
          <State indicator='1' text='Waiting' />
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
          <Text style={styles.columnRight}>{`KL-7263727399 `}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Customer`}</Text>
          <Text style={styles.columnRight}>{`Andrey Ainsley`}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Date & Time`}</Text>
          <Text style={styles.columnRight}>{`Dec 23, 2024 | 10:00 AM`}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Date & Time Finish`}</Text>
          <Text style={styles.columnRight}>{`Dec 23, 2024 | 8:00 PM`}</Text>
        </View>
        <View style={{ ...styles.rowContainer, alignItems: "flex-start" }}>
          <Text style={styles.columnLeft}>{`Pick-Up Address`}</Text>
          <Text
            style={styles.columnRight}
          >{`Enigma Camp, Jl. H. Dahlan, RT.8/RW.4, Ragunan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta`}</Text>
        </View>
      </View>

      {/* BIll */}
      <View style={{...styles.cardContainer, marginBottom: 24}}>
        <View style={styles.rowContainer}>
          <Text style={{...styles.columnLeft, width:"100%", fontSize:16, fontWeight: "600"}}>{`Bill`}</Text>
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
          <Text style={styles.columnRight}>{`Rp. 10.000`}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Weight`}</Text>
          <Text style={styles.columnRight}>{`12Kg`}</Text>
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
        <View style={{ ...styles.rowContainer}}>
          <Text style={styles.columnLeft}>{`Total Amount`}</Text>
          <Text
            style={{...styles.columnRight, fontSize: 24, color: Colors.PRIMARY}}
          >{`Rp. 120.000`}</Text>
        </View>
      </View>
    </ScrollView>
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
});
