import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
 const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
 };
 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        width:'100%',
        borderColor: '#c6c6c6',
        borderRadius: 15,
        borderWidth: 2,
        paddingHorizontal: 20,
        marginVertical:15,
    },
    input: {},
 })

export default CustomInput 

