import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
              <View>
                <Text style={{ color: "white"}}>
                  Welcome
                </Text>
                <Text style={styles.userName}>saya</Text>
                <Text style={styles.userName}>kamu</Text>
              </View>
            </View>
            <FontAwesome5 name="bookmark" size={24} color="white" />
          </View>
          <View style={styles.searchBarContainer}>
            <TextInput placeholder="search" style={styles.textInput} />
            <FontAwesome
              name="search"
              size={24}
              color="black"
              style={styles.searchBtn}
            />
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#42C2FF",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer:{
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  profileMainContainer:{
    display: "flex",
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  searchBarContainer:{
    display: "flex",
    flexDirection: 'row',
    gap:5,
    marginBottom: 10,
    marginTop:20,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  textInput:{
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width: '90%',
    fontSize: 16,
  },
  searchBtn:{
    padding:8,
    borderRadius: 8,
    backgroundColor: "white"
  }
});