import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import NavBar from '../components/nav/NavBar';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function SignIn() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2,
        backgroundColor: "#090909"
      }}
    >
      <StatusBar style="light" />
      <NavBar styles={{ backgroundColor: 'transparent' }} />
      <View style={{ flexGrow: 1, flex: 1, justifyContent: 'space-between' }}>
        <View style={{flexDirection:"row",marginLeft: 20, marginRight: 20, marginTop: 25}}>
          {/*marginLeft: 20, marginRight: 20, marginTop: 35, alignSelf: "center"*/}
          <Svg style={{}} width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M10 1.367a4.833 4.833 0 00-1.341 9.48c-1.592.192-2.957.755-3.987 1.77-1.31 1.29-1.972 3.21-1.972 5.717a.633.633 0 101.267 0c0-2.293.604-3.84 1.595-4.816.992-.977 2.474-1.484 4.438-1.484 1.964 0 3.447.507 4.44 1.484.99.977 1.594 2.523 1.594 4.816a.633.633 0 001.266 0c0-2.507-.663-4.427-1.973-5.717-1.027-1.014-2.393-1.578-3.986-1.77a4.836 4.836 0 00-1.34-9.48zM6.434 6.201a3.567 3.567 0 117.133 0 3.567 3.567 0 01-7.133 0z" fill="#fff" />
          </Svg>
          {/*marginLeft: 20, marginRight: 20, marginTop: 10, alignSelf: "center"*/}
          <Text style={{color: "#FFF", fontSize: 20, fontWeight: "300", marginLeft: 8}}>Sign In</Text>
        </View>
        <Text style={{color: "#FFF", fontSize: 30, fontWeight: "500", marginLeft: 20, marginRight: 20, marginTop: 10, alignSelf: "center"}}>Save Your Progress Across All Devices</Text>
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <Svg width={330} height={353} viewBox="0 0 330 353" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M235.456 219.948c5.139-11.11 10.294-22.206 15.466-33.287.503-1.079.744-1.809.722-2.191-1.206-23.208-19.988-42.788-43.051-42.472-1.345.019-2.763.261-4.255.729a40750.905 40750.905 0 01-106.037 32.987 66423.7 66423.7 0 0129.284-63.301c1.96-4.234 3.465-7.169 4.515-8.805 10.618-16.558 33.125-22.967 51.847-13.004a63620.726 63620.726 0 0188.646 47.277c4.142 2.215 7.124 3.98 8.945 5.294 10.205 7.384 17.156 18.082 19.209 30.59 1.757 10.716-2.034 21.324-9.474 28.266-.615.57-1.363.994-2.245 1.271a47878.864 47878.864 0 01-53.572 16.646z" fill="url(#paint0_linear_439_1701)" fillOpacity={0.1} />
            <Path d="M235.456 219.948c-.089.267-.196.414-.319.442-1.998.425-4.793 1.208-8.387 2.348-23.303 7.393-56.029 17.57-98.177 30.532-5.778 1.772-15.054-.438-20.335-2.863-14.818-6.808-25.378-21.766-26.322-38.162a4.439 4.439 0 01.423-2.172 3660.177 3660.177 0 0015.726-33.985l.236-.374a40750.905 40750.905 0 00106.037-32.987c1.492-.468 2.91-.71 4.255-.729 23.063-.316 41.845 19.264 43.051 42.472.022.382-.219 1.112-.722 2.191a10654.951 10654.951 0 00-15.466 33.287z" fill="url(#paint1_linear_439_1701)" fillOpacity={0.1} />
            <Path d="M235.137 220.39a6657.38 6657.38 0 01-27.439 59.425c-2.21 4.725-4.493 9.99-7.356 13.894-9.927 13.548-27.302 19.556-44.385 14.21-2.236-.698-5.146-2.003-8.731-3.917a100863.01 100863.01 0 01-87.287-46.684c-3.935-2.105-6.889-3.913-8.862-5.425-16.303-12.459-24.623-35.12-13.448-52.525 1.34-2.08 4.272-5.959 6.927-6.807a3666.849 3666.849 0 0151.643-16.095c.89-.269 1.512-.395 1.866-.378a3660.177 3660.177 0 01-15.726 33.985 4.439 4.439 0 00-.423 2.172c.944 16.396 11.504 31.354 26.322 38.162 5.281 2.425 14.557 4.635 20.335 2.863 42.148-12.962 74.874-23.139 98.177-30.532 3.594-1.14 6.389-1.923 8.387-2.348z" fill="url(#paint2_linear_439_1701)" fillOpacity={0.1} />
            <Path d="M230.991 180.433a10871.378 10871.378 0 0115.76-33.169c.513-1.075.76-1.803.741-2.184-1.046-23.143-19.761-42.696-42.913-42.416-1.35.016-2.776.256-4.277.72a41220.029 41220.029 0 01-106.673 32.732 65140.47 65140.47 0 0129.844-63.076c1.997-4.22 3.529-7.144 4.595-8.773 10.775-16.495 33.413-22.851 52.135-12.889a63942.958 63942.958 0 0188.648 47.278c4.141 2.215 7.122 3.979 8.94 5.293 10.191 7.378 17.094 18.056 19.065 30.532 1.688 10.688-2.192 21.26-9.71 28.171-.62.567-1.375.989-2.262 1.263a46527.847 46527.847 0 01-53.893 16.518z" fill="#333" />
            <Path d="M230.991 180.433c-.091.266-.199.413-.323.44-2.008.421-4.82 1.197-8.435 2.329-23.444 7.336-56.366 17.434-98.766 30.295-5.813 1.758-15.108-.459-20.391-2.886-14.826-6.811-25.32-21.742-26.152-38.093a4.415 4.415 0 01.44-2.165 3661.546 3661.546 0 0016.026-33.865l.24-.372a41255.854 41255.854 0 00106.672-32.732c1.501-.464 2.927-.704 4.277-.72 23.152-.281 41.867 19.273 42.913 42.416.019.381-.228 1.109-.741 2.184a10871.378 10871.378 0 00-15.76 33.169z" fill="#D6D6C2" />
            <Path d="M230.668 180.873a6669.917 6669.917 0 01-27.964 59.214c-2.252 4.709-4.581 9.955-7.483 13.844-10.06 13.493-27.544 19.459-44.654 14.102-2.239-.7-5.151-2.006-8.736-3.92a98050.026 98050.026 0 01-87.287-46.684c-3.935-2.104-6.887-3.912-8.857-5.423-16.277-12.449-24.468-35.057-13.127-52.396 1.36-2.072 4.33-5.935 7.002-6.777a3721.997 3721.997 0 0151.952-15.971c.896-.267 1.52-.392 1.876-.374a3661.546 3661.546 0 01-16.026 33.865 4.416 4.416 0 00-.44 2.165c.831 16.351 11.325 31.282 26.152 38.093 5.283 2.427 14.578 4.644 20.391 2.886 42.4-12.861 75.322-22.959 98.766-30.295 3.615-1.132 6.426-1.908 8.435-2.329z" fill="#F9EBD9" />
            <Defs>
              <LinearGradient id="paint0_linear_439_1701" x1={285.234} y1={150.278} x2={146.159} y2={319.299} gradientUnits="userSpaceOnUse">
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#fff" />
              </LinearGradient>
              <LinearGradient id="paint1_linear_439_1701" x1={285.234} y1={150.278} x2={146.159} y2={319.299} gradientUnits="userSpaceOnUse">
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#fff" />
              </LinearGradient>
              <LinearGradient id="paint2_linear_439_1701" x1={285.234} y1={150.278} x2={146.159} y2={319.299} gradientUnits="userSpaceOnUse">
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#fff" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        <TouchableWithoutFeedback onPress={() => {console.log("clicked")}}>
          <View style={{backgroundColor: "#FFF", borderRadius: 25, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.08)", marginBottom: 25, marginLeft: 25, marginRight: 25, height: 75, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: "#000", fontSize: 19, fontWeight: "400", letterSpacing: 1.5}}>Continue With Google</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}
