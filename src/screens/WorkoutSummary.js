import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import background from "../assets/images/WorkoutSummary/background.png"
import { TouchableOpacity } from 'react-native-gesture-handler'
const WorkoutSummary = () => {
  return (
    <ImageBackground source={background} style = {styles.container}>
      <TouchableOpacity activeOpacity={0.75} style = {styles.button}>
            <Text style = {styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default WorkoutSummary

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        width:330,
        height:69,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
    },
    buttonText:{
        fontSize:15,
        fontFamily:"Lexend"
    }
    
})