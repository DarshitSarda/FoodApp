import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native';

const CustomButton = ({ onPress, text }) => {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
container: {
    backgroundColor:'#9b6c5c',
    width: '100%',
    padding: 20,
    borderRadius: 5,
    alignItems:'center',
    marginTop: 10,
},
text:{
fontWeight:'bold',
color:'white',
fontSize: 15,
},
});
export default CustomButton