import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CardTransactions from "../../components/Transaction/CardTransactions";
import http from "../../api/HttpConfig";
import { useAuthContext } from "../../store/AuthContext";
import Colors from "../../Utils/Colors";

const ActiveOrderScreen = () => {
  const navigation = useNavigation();

  const dataUser = useAuthContext().state.dataUser;
  const [transactionList, setTransactionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBottom, setIsLoadingBottom] = useState(false);
  const [refreshing, setRefresing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (limit) => {
    const response = await http
      .get(
        `/api/transaction/active/${dataUser.id}?page=${currentPage}&size=${limit}`
      )
      .catch((e) => {
        if (e.response.data.statusCode == 404) {
          setIsLoading(false);
        }
      });
    setTransactionList(response.data.data);
    setIsLoading(false);
  };

  const fethMore = async () => {
    if (isLoadingBottom) return;

    setIsLoadingBottom(true);
    const nextPage = currentPage + 1;
    let response = await http.get(
      `/api/transaction/active/${dataUser.id}?page=${currentPage}&size=${2}`
    );
    // setTransactionList([...transactionList, ...response.data.data]);
    setTransactionList((prev)=>{
      return [...prev, ...response.data.data];
    })
    setCurrentPage(nextPage);
    setIsLoadingBottom(false);
  };

  const handleRefresh = async () => {
    setRefresing(true);
    fetchData(2);
    setRefresing(false);
    setCurrentPage(1)

  };

  useEffect(() => {
    fetchData(3);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionList}
        renderItem={({ item }) => <CardTransactions item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
            No Transaction Found
          </Text>
        }
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={fethMore}
        onEndReachedThreshold={3}
        ListFooterComponent={() =>
          isLoadingBottom ? (
            <ActivityIndicator size="large" color={Colors.PRIMARY} />
          ) : (
            null
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 5,
    backgroundColor: "white",
  },
});

export default ActiveOrderScreen;
