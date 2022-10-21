import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{height} = useWindowDimensions();
    const onSignInPressed = () =>{
        console.warn("Sign In");
    };

    const onForgotPasswordPressed = () =>{
        console.warn('onForgotPasswordPressed'); 
    };
    const onSignInFacebook = () =>{
console.warn('onSignInFacebook')
    };
    const onSignInGoogle = () =>{
console.warn('onSignInGoogle')
    };
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text styles={styles.text}>The CookBook</Text>
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
        <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        
        <CustomButton text="Sign In with Facebook" 
        onPress={onSignInFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
        />
        
        <CustomButton text="Sign In with Google" 
        onPress={onSignInGoogle}
        bgColor="#f8eeec"
        fgColor="#dd4d44"
        />

      </View>
      </ScrollView>
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
    text:{
        fontSize: 40,
    }
});
  export default SignInScreen