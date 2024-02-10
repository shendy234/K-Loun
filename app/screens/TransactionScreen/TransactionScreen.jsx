import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

const TransactionScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Image
          source={require("../../../assets/icon.png")}
          style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>List TransactionScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});

export default TransactionScreen;
