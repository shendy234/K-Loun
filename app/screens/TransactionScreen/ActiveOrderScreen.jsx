import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import CardTransactions from "../../components/Transaction/CardTransactions";
import http from "../../api/HttpConfig";
import { useAuthContext } from "../../store/AuthContext";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const ActiveOrderScreen = () => {

  const dataUser = useAuthContext().state.dataUser;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [isEndReached, setIsEndReached] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    try {
      const response = await http.get(
        `/transaction/active/${dataUser.id}?page=${currentPage}&size=${limit}`
      );
      const data = response.data.data;
      setTransactions((prevTransactions) => [...prevTransactions, ...data]);
      setCurrentPage((prevPage) => prevPage + 1);
      if (data.length < limit) {
        setHasMoreData(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("Data not found");
        setHasMoreData(false);
      } else {
        console.error("Error fetching transactions:", error);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleEndReached = () => {
    fetchTransactions();
  };

  const onRefresh = () => {
    setTransactions([]);
    setCurrentPage(1);
    setHasMoreData(true);
    // setRefreshing(true);
    fetchTransactions();
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ paddingTop: 16 }}
        data={transactions}
        renderItem={({ item }) => <CardTransactions item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          !transactions == [] ? (
            <View>
              <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
                No Transaction Found
              </Text>
              <TouchableOpacity
                onPress={onRefresh}
                style={{
                  flex: 1,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="refresh-circle-outline"
                  size={65}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <Text>Loading</Text>
          )
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              style={{ marginBottom: 20 }}
              size="large"
              color={Colors.PRIMARY}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 1,
    gap: 5,
    backgroundColor: "white",
  },
});

export default ActiveOrderScreen;
