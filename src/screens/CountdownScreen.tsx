import React, { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Animated,
  Easing
} from 'react-native';
import NavBar from '../components/nav/NavBar';

export default function CountdownScreen() {
  const position = useRef(new Animated.Value(0)).current;
  let [second, setSecond] = useState(5);
  position.addListener(({value: x}) => {setSecond(5-Math.floor(x*(5/Dimensions.get('screen').height)))});
  useEffect(() => {
    Animated.timing(position, {
      toValue: Dimensions.get('screen').height,
      duration: 5000,
      useNativeDriver: false,
      easing: Easing.linear
    }).start();
  }, [position]);
  return (
    <>
      <Animated.View style={{ position: 'absolute', top: position, left: 0, right: 0, height: Dimensions.get('screen').height, backgroundColor: '#60BF86', zIndex: 1 }}/>
      <Image source={require('../assets/images/breathe-background.png')} resizeMode='cover' style={{width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute'}}></Image>
      <Text style={{ color: 'white', fontSize: 150, fontWeight: '700', position: 'absolute', top: (Dimensions.get('screen').height/2)-75, alignSelf: 'center', zIndex: 2 }}>{second}</Text>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
        <View style={{ width: '100%' }}></View>
        <StatusBar style='light' />
        <NavBar styles={{backgroundColor: 'transparent'}}/>
        <View style={{ flexGrow: 1 }}></View>
      </SafeAreaView>
    </>
    );
}