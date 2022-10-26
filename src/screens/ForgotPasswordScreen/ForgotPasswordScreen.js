import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";



const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();
    const onPressLearnMore = () =>{
        console.warn("Email sent");
    }
    const onRegisterPressed = () =>{
        console.warn("Creating new account");
    };

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>RESET PASSWORD</Text>
        <CustomInput 
        placeholder="Email ID" 
        value={username} 
        setValue={setUsername} />

        <CustomInput 
        placeholder="Re-enter Email Id" 
        value={password} 
        setValue={setPassword} 
        secureTextEntry={true}
        />


        <Button
        onPress={onPressLearnMore}
        title='Send password reset email'
        color='#39B2B3'
        />

        
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
    

    text:{
       color:'gray',
       marginVertical:10, 
    },

    title:{
        fontSize:35,
        fontWeight:"bold",
        color:'#616161',
        margin:10,
    },
});
  export default ForgotPasswordScreen;