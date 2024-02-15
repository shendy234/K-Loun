import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import Colors from '../../Utils/Colors';
import axios from 'axios';

const HomeScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() =>{
    handleService()
  }, [])

  const handleService = async () => {
      const resService = await axios.get(`http://10.10.100.202:8090/services`);
      console.log(resService.data)
      setServices(resService.data.data.map(service =>{
        return {
          id: service.id,
          name: service.name,
          price: service.price,
          image: require("../../../assets/images/Service1.jpg"),
        }
      }))
      // setId(resService.data.id);
      // setName(resService.data.name);
      // setPrice(resService.data.price);
        
      }
    

  // const laundryServices = [
  //   {
  //     id: id,
  //     service: name,
  //     price: price,
  //     rating: 4.8,
  //     reviews: 3824,
  //     image: require("../../../assets/images/Service1.jpg"),
  //   },
  // ];

  const itemList =[
    {
      image: require("../../../assets/images/Slider.jpg"),
    },
    {
      image: require("../../../assets/images/Slider.jpg"),
    },
    {
      image: require("../../../assets/images/Slider.jpg"),    
    },
  ]

  const renderSeparator = () => <View style={{ width: 10 }} />; // Sesuaikan lebar jarak sesuai kebutuhan

  const renderItem = ({ item }) => (
    <View style={styles.serviceContainer}>
      <View>
        <Image
          style={[styles.items, { aspectRatio: 1.8 }]}
          source={item.image}
          resizeMode="cover"
        />
      </View>
      </View>
  );

  return (
    <ScrollView>
      <Header />
      <View style={styles.list}>
      <FlatList
        data={itemList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
      />
      </View>
        <View style={styles.container}>
            {services.map((service) => (
              <TouchableOpacity key={service.id} onPress={() => console.log("Service pressed", service.id)}>
                <View style={styles.serviceContainer}>
                  <View>
                    <Image
                      style={styles.image}
                      source={service.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.textContainer}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.price}>${service.price}</Text>
            </View>
            
          </View>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap:5,
  },

  serviceContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap:10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceName: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  rating: {
    fontSize: 14,
    color: 'gold',
    marginBottom: 2,
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
  },
  featuredSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list:{
    flex:1,
    marginTop:5,
    borderRadius:20,
    padding:10
  },
  items:{
    width: 200,
    height: 200,
    borderRadius: 10,
  }
});

export default HomeScreen;
