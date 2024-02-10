import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from './Header';
import Carousel from "react-native-snap-carousel";

const HomeScreen = () => {
  const laundryServices = [
    {
      name: 'Jane Cooper',
      service: 'Laundry Services',
      price: 21,
      rating: 4.8,
      reviews: 3824,
      image: require("../../../assets/images/onboarding-2.png"),
    },
    {
      name: 'Darron Kulikowski',
      service: 'Laundry Services',
      price: 23,
      rating: 4.9,
      reviews: 6182,
      image: require("../../../assets/images/onboarding-2.png"),
    },
  ];

  const user = {
    fullName: "John Doe",
    primaryEmailAddress: "john.doe@example.com",
    image: require("../../../assets/images/onboarding-2.png"),
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Tawaran 1",
      image: require("../../../assets/images/onboarding-2.png"),
    },
    {
      id: 2,
      name: "Tawaran 2",
      image: require("../../../assets/images/onboarding-2.png"),
    },
    {
      id: 3,
      name: "Tawaran 3",
      image: require("../../../assets/images/onboarding-2.png"),
    },
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image
        source={item.image}
        style={styles.carouselImage}
        resizeMode="cover"
      />
      <Text style={styles.carouselItemTitle}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView>
      <Header/>
      <View style={styles.featuredSection}>
            <Text style={styles.sectionTitle}>Tawaran Menarik Buat Kamu</Text>
            <Carousel
              data={featuredProducts}
              renderItem={renderCarouselItem}
              sliderWidth={350}
              itemWidth={350}
              loop
              autoplay
              autoplayInterval={2000}
            />
          </View>
    <View style={styles.container}>
      {laundryServices.map((service, index) => (
        <View key={index} style={styles.serviceContainer}>
          <View style={{backgroundColor:"red"}}>
          <Image
            style={styles.image}
            source={service.image}
            resizeMode="cover"
          />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{service.name}</Text>
            <Text style={styles.serviceName}>{service.service}</Text>
            <Text style={styles.price}>${service.price}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{service.rating}</Text>
            <Text style={styles.reviews}>
              {service.reviews} reviews
            </Text>
          </View>
        </View>
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
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor:"#42C2FF"
  },
  serviceContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap:10,
  },
  image: {
    width: 100,
    height: 100,
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
    color: 'gray',
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
  carouselItem: {
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  carouselImage: {
    width: "100%",
    height: 150,
  },
  carouselItemTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
