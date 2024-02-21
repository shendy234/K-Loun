import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "../Utils/Colors";

const State = (props) => {
  const indicator = props.indicator;
  const text = props.text

  return (
    <View
      style={{
        ...styles.stateContainer,
        backgroundColor:
          indicator == "1"
            ? "rgba(51, 94, 247, 0.08)" 
            : indicator == "2"
            ? "#FFF5F5"
            : indicator == "3"
            ? "rgba(114, 16, 255, 0.08)" 
            : indicator == "4"
            ? "#F2FFFC"
            : "",
      }}
    >
      <Text
        style={{
          ...styles.stateText,
          color:
            indicator == "1"
              ? Colors.PRIMARY
              : indicator == "2"
              ?  Colors.RED
              : indicator == "3"
              ? Colors.PURPLE
              : indicator == "4"
              ? Colors.GREEN
              : "",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default State;

const styles = StyleSheet.create({
  stateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: "flex-start",
    borderRadius: 6,
  },
  stateText: {
    fontSize: 10,
  },
});
