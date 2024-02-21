import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

const LoadingScreen = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
      <ActivityIndicator size="large" color={Colors.PRIMARY} />
    </View>
  )
}

export default LoadingScreen;
