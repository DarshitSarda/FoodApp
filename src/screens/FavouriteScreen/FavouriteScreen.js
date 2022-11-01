import React from "react";
import {View,Text,StyleSheet} from 'react-native';
const FavouriteScreen = () => {
return(
    <View style={styles.root}>
        <Text style={styles.text}>Favourites</Text>
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

export default FavouriteScreen;
