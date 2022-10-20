import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/FoodAppLogo.png';
import CustomInput from "../../components/CustomInput";

const SignInScreen = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const{height} = useWindowDimensions();
    return (
      <View style={styles.root}>
        <Image 
        source={Logo} 
        style={[styles.Logo, {height: height*0.25}]} 
        resizeMode="contain"/>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} />
      </View>
    )
  }

const styles = StyleSheet.create({
    root: {
       alignItems:'center',
       padding: 20,
    },

    Logo: {
        width:  '75%',
        maxWidth: 700,
        height: 250,
    },
});
  export default SignInScreen