import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Switch } from 'react-native'

const SettingSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style = {styles.con}>
      <Text style = {styles.text}>{props.title}</Text>
      <Switch
       style = {styles.switch} 
       thumbColor={"white"}
        trackColor={{false: 'rgba(255, 255, 255, 0.25)', true: 'rgba(255, 255, 255, 0.75)'}}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
    </View>
  )
}

export default SettingSwitch

const styles = StyleSheet.create({
    con:{
        justifyContent:"space-between",
        alignItems:"center",
        alignSelf:"flex-start",
        flexDirection:"row",
        marginHorizontal:"5%",
        margin:"2%",
        width:"90%"
    },
    text:{
        color:"white",
        fontFamily:"Lexend-Light",
        fontSize:17
    },
    switch:{
        transform:[{scaleX:.8},{scaleY:.8}]
    }
})