import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native';

const CustomButton = ({ onPress, text, type, bgColor, fgColor}) => {
    return(
        <Pressable onPress={onPress} style={[
            styles.container, 
            styles['container_${type}'],
            bgColor?{backgroundColor: bgColor}:{}
            ]}>
            <Text style={[
                styles.text,
                styles['text_${type}'],
                fgColor?{color:fgColor}:{}
                ]}>{text}</Text>
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
container_TERTIARY:{
backgroundColor:'#ff0000'
},
text:{
fontWeight:'bold',
color:'white',
fontSize: 15,
},
});
export default CustomButton