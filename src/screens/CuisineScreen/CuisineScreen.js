import React from "react";
import {View,Text,StyleSheet} from 'react-native';
const CuisineScreen = () => {
return(
    <View style={styles.root}>
        <Text style={styles.text}>Cuisine Screen</Text>
    </View>
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

export default CuisineScreen