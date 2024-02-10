import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { OnboardFlow } from "react-native-onboard";

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardFlow
        pages={[
          {
            title: "Lazy to wash every day?",
            subtitle: "What a waste of time",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-1.png")
            ).uri,
          },
          {
            title: "Don't have a washing machine?",
            subtitle: "It's hard to eat",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-2.png")
            ).uri,
          },
          {
            title: "Prefer to lie down?",
            subtitle:
              "Laying down while mabar is good anyway",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-3.png")
            ).uri,
          },
          {
            title: "The clothes are suddenly neat",
            subtitle:
              "Laundry can be done without the need to move much",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-4.png")
            ).uri,
          },
        ]}
        type="fullscreen"
        autoPlay="true"
        primaryButtonStyle={styles.button}
        backgroundImageUri={
          Image.resolveAssetSource(
            require("../../../assets/images/onboarding-bg.png")
          ).uri
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#42C2FF",
    height: 55,
    elevation: 7,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
  },
});
