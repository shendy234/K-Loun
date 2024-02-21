import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Colors from "../../Utils/Colors";
import "core-js/stable/atob";


export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
        <Image
          source={require("../../../assets/LogoPutih.png")}
          style={styles.userImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    
  },
  userName: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  welcomeText: {
    color: "white",
    fontSize: 14,
  },
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.THIRD,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profileMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    fontSize: 16,
  },
  searchBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
});