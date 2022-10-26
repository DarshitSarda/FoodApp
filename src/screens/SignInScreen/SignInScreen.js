import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () =>{
        console.warn("Signing in");
    };
      
    

    const OnCreatePressed = () =>{
    navigation.navigate("Sign Up");
    } 
    

    const onForgotPasswordPressed = () =>{ 
        navigation.navigate("Forgot Password");
    };

    const onSignInFacebook = () =>{
        console.warn('Signing in with Facebook')
    };
    const onSignInGoogle = () =>{
        console.warn('Signing in with Google')
    };
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.text}>The CookBook</Text>
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
        
        <Text style={styles.forgot} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
        
        
        <Text style={styles.para}>New here?
        <Text style={styles.extra} onPress={OnCreatePressed}> Create account</Text> 
        
        </Text>
        
        {/*
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
        */}

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
    },
    extra:{
        color:'#ff0000'
    },
    para:{
        color:'#000000',
    },
    forgot:{
        color:'#6372FB',
        padding:20,
        textDecorationLine:"underline"
    }
});
  export default SignInScreen