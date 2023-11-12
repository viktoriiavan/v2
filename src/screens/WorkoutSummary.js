import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import background from "../assets/images/WorkoutSummary/background.png";
import Correctness from '../components/Summary/Correctness';
import Streak from '../components/Summary/Streak';
import Earned from '../components/Summary/Earned';

const WorkoutSummary = () => {

  return (
    <>
      <ImageBackground source={background} style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.scrollCon}>
            <View style={styles.sum}>
              <View style={styles.date}>
                <Feather style={styles.sun} name="sun" size={26} color="white" />
                <Text style={styles.sumTxt1}>Monday, Sept 16</Text>
              </View>
              <Text style={styles.sumTxt2}>Workout Summary</Text>
            </View>
            <Earned />
            <Streak />
            <Correctness />
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.75} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  )
}

export default WorkoutSummary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
  scrollCon: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  sum: {
    marginLeft: "10%",
    width: "100%",
    marginBottom: "5%",
    marginTop: '9%',
  },
  sumTxt1: {
    color: "white",
    fontFamily: "Lexend-Light",
    fontSize: 16,
    marginLeft: "-35%"
  },
  sumTxt2: {
    color: "white",
    fontFamily: "Lexend-Medium",
    fontSize: 24
  },
  sun: {
    marginRight: "40%"
  },
  date: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "3%",
    width: "85%",
  },
  button: {
    width: 330,
    height: 69,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: '5%'
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Lexend-Regular"
  },
});
