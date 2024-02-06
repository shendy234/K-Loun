import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { OnboardFlow } from "react-native-onboard";

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardFlow
        pages={[
          {
            title: "Welcome to my app",
            subtitle: "Connect your bank account now and start saving money.",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-1.png")
            ).uri,
          },
          {
            title: "Buy cool stuff",
            subtitle: "Remember that ice cream you wanted to buy?",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-2.png")
            ).uri,
          },
          {
            title: "The right tools",
            subtitle:
              "Our app can do anything. Literally anything. We are that good.",
            imageUri: Image.resolveAssetSource(
              require("../../../assets/images/onboarding-3.png")
            ).uri,
          },
          {
            title: "The right tools",
            subtitle:
              "Our app can do anything. Literally anything. We are that good.",
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
