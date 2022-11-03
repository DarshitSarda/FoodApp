import React,{useContext} from "react";


import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from "../../components/CustomButton/CustomButton";
import { AuthContext } from "../../navigation/AuthProvider";

const HomePage = () => {
    const {logout}=useContext(AuthContext);

    return(
        <>
        <View style={styles.root}>
            <Text style={styles.text}>HomePage</Text>
            <TouchableOpacity
               onPress={ ( )=> logout()}
            >
                
            </TouchableOpacity>
        </View>
      </>
    )

}
const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    text:{
        fontSize: 50,
        color:'#000000'
    }
})

export default HomePage