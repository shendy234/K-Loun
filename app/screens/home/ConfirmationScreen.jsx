import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Buttons from "../../components/Buttons";

const ConfirmationScreen = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.line} />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Service`}</Text>
          <Text style={styles.columnRight}>{`Cuci Cepat`}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Customer`}</Text>
          <Text style={styles.columnRight}>{`Andrey Ainsley`}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.columnLeft}>{`Date & Time`}</Text>
          <Text style={styles.columnRight}>{`Dec 23, 2024`}</Text>
        </View>
        <View style={{ ...styles.rowContainer, alignItems: "flex-start" }}>
          <Text style={styles.columnLeft}>{`Address`}</Text>
          <Text
            style={styles.columnRight}
          >{`Enigma Camp, Jl. H. Dahlan, RT.8/RW.4, Ragunan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta`}</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.line} />
        </View>
      </View>
    </ScrollView>
    <View style={styles.containerButton}>
          <Buttons color="blue" title="Confirmation" onPress={() => Alert.alert('Tampil ya mas brey') }/>
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
