import { StyleSheet, Text, View ,Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import React from 'react'


const Streak = () => {
  return (
    <View style = {styles.support}>
      <View style = {styles.headerCon}>
        <MaterialCommunityIcons style = {styles.icon} name="calendar-month-outline" size={24} color="white" />
        <Text style = {styles.header}>Streak Renewed</Text>
      </View>
    <View style = {styles.box}>
      <View style = {styles.left}>
        <Text style = {styles.title}>STREAK</Text>
        <Text style = {styles.stat}>108 DAYS</Text>
        <Text style = {styles.title} >SINCE</Text>
        <Text style = {styles.stat}>1/12/2023</Text>
      </View>
      <View style = {styles.right}> 
          <View style = {{flexDirection:"row"}}>
            <View style = {styles.gray}/>
            <View style = {styles.gray}/>
            <View style = {styles.gray}/>
            <View style = {styles.gray}/>
            <View style = {styles.gray}/>
            <View style = {styles.gray}/>
            <View style = {styles.gray}/>
          </View>
          <View style = {{flexDirection:"row"}}>
            <View style = {styles.gray}/>
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
          </View>
          <View style = {{flexDirection:"row"}}>
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
          </View>
          <View style = {{flexDirection:"row"}}>
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
          </View>
          <View style = {{flexDirection:"row"}}>
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
            <View style = {styles.white} />
          </View>
      </View>
    </View>
  </View>
  )
}

export default Streak

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
      marginLeft:"5%",
      marginRight:"7%",
      alignSelf:"center",
    },
    right:{
      width:'60%',
      alignSelf:"center",
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
    gray:{
      width:16,
      height:16,
      borderRadius:3,
      backgroundColor:"rgba(255, 255, 255, 0.05)",
      margin:"3%"
    },
    white:{
      width:16,
      height:16,
      borderRadius:3,
      backgroundColor:"rgba(255, 255, 255, 0.50)DD",
      margin:"3%"
    }
    

})