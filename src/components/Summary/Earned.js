import { StyleSheet, Text, View ,Image} from 'react-native'
import { Octicons} from '@expo/vector-icons'; 
import React from 'react'
import img from "./vector.png"

const Earned = () => {
  return ( 
    <View style = {styles.support}>
      <View style = {styles.headerCon}>
        <Octicons style = {styles.icon} name="graph" size={24} color="white" />
        <Text style = {styles.header}>Correctness Summary</Text>
      </View>
    <View style = {styles.box}>
      <View style = {styles.left}>
          <Text style = {styles.title}>ACCURACY</Text>
          <Text style = {styles.stat}>95.6%</Text>
          <Text style = {styles.title} >WORST FORM</Text>
          <Text style = {styles.stat}>PUSH UPS</Text>
          <Text style = {styles.title}>BEST FORM</Text>
          <Text style = {styles.stat}>PLANK</Text>
      </View>
      <View style = {styles.right}> 
        <Image style = {styles.vector} source = {img}/> 
        <Text style = {styles.acc}>ACCURACY BY EXERCISE</Text>
      </View>
    </View>
  </View>
  )
}
  

export default Earned
const styles = StyleSheet.create({
    support:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:'center',
        width:"90%",
        height:"40%",
        marginVertical:"5%"
      },
      headerCon:{
        flexDirection:"row",
        marginBottom:"6%",
        alignSelf:"flex-start",
        marginLeft:'2%'
      },
      icon:{
        marginRight:"2%"
      },
      header:{
        fontFamily:"Lexend-Light",
        fontSize:16,
        color:"white"
      },
      box:{
        width:"100%",
        height:"90%",
        borderRadius:30,
        borderWidth:3,
        borderColor:"rgba(255, 255, 255, 0.08)",
        backgroundColor:"rgba(196, 196, 196, 0.03)",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
      },
      left:{
        marginRight:"10%",
        alignSelf:"center"
      },
      right:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginLeft:"1%"
      },
      title:{
        fontFamily:"Lexend-Regular",
        color: "rgba(255, 255, 255, 0.25)",
        fontSize:16,
        fontWeight:300,
      },
      stat:{
        fontFamily:"Lexend-Bold",
        color:" rgba(255, 255, 255, 0.75)",
        fontSize:18,
        fontWeight:400,
        marginBottom:"15%"
      },
      vector:{
        marginBottom:"30%",
        width:"100%",
       
      },
      acc:{
        fontFamily:"Lexend-Light",
        color: "rgba(255, 255, 255, 0.25)",
        fontSize:12
      }
})