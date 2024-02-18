import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

const Buttons = (props) => {
  const color = props.color;
  const isLoading = props.isLoading;
  return isLoading ? (
    <TouchableOpacity
      disabled={true}
      style={{
        ...styles.button,
        backgroundColor: Colors.GREY,
      }}
      onPress={props.onPress}
    >
      <ActivityIndicator size="large" color={Colors.PRIMARY} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      disabled={props.disabled}
      style={{
        ...styles.button,
        backgroundColor:
          color == "green"
            ? Colors.GREEN
            : color == "blue"
            ? Colors.PRIMARY
            : color == "red"
            ? Colors.RED
            : color == "purple"
            ? Colors.PURPLE
            : color == "grey"
            ? Colors.GREY
            : "",
      }}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    letterSpacing: 0.2,
  },
});
