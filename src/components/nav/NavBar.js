import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather,Ionicons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
const NavBar = () => {
    const nav = useNavigation()
  return (
    <View style = {styles.con}> 
        <TouchableOpacity>
            <Feather name="menu" size={23} color="white" />
        </TouchableOpacity>
        <View style = {styles.imgBorder}>
            <View style = {styles.realimg}></View>
        </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    con:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        alignSelf:"center",
        backgroundColor:"#090909",
        width:"90%",
        height:"6.25%",
        marginVertical:"2%",
    },
    imgBorder:{
        backgroundColor:'#090909',
        justifyContent:"center",
        alignItems:"center",
        width:"12%",
        height:"100%",
        borderRadius:100,
        borderWidth:1,
        borderColor:"#272727"
    },
    realimg:{
        backgroundColor:'red',
        width:"75%",
        height:"75%",
        borderRadius:100
    }
})