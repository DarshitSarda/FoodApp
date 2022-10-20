import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{height} = useWindowDimensions();
    const onSignInPressed = () =>{
        console.warn("Sign In");
    }
    return (
      <View style={styles.root}>
        <Image 
        source={Logo} 
        style={[styles.Logo, {height: height*0.25}]} 
        resizeMode="contain"/>
        <CustomInput 
        placeholder="Email ID" 
        value={username} 
        setValue={setUsername} />
        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword} 
        secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
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