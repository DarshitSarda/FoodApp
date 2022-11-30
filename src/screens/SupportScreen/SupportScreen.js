import React from "react";
import {View,Text,StyleSheet, TextInput,Button} from 'react-native';
const SupportScreen = () => {
return(
    <View style={styles.root}>
        <Text style={styles.text}>FIND YOUR DESIRED RECIPE</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter recipe name"
        />
        <Button
        title='Search'
        color='#39B2B3'
        />
    </View>
)
}
const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        flex:1,
    },
    text:{
    fontSize: 42,
    color: '#990000',
    textAlign: 'center',
    paddingTop: 20,
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5
    },
    input:{
        color:'black',
        backgroundColor: '#f9f9f9',
        width:'75%',
        borderColor: '#c6c6c6',
        borderRadius: 15,
        borderWidth: 2,
        paddingHorizontal: 20,
        marginVertical:15,
    }
})

export default SupportScreen