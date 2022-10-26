import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";



const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();
    const onRegisterPressed = () =>{
        console.warn("Creating new account");
    };
    const onDetailsPressed = () =>{
          navigation.navigate("Profile Screen");
    }

    const onSignInPressed = () =>{
        console.warn("Signing In");
    };
    const onlinkPressed = () =>{
            navigation.navigate("Sign In");
    }

    const onForgotPasswordPressed = () =>{
        console.warn('Have trouble remembering your password?'); 
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
        <Text style={styles.title}>CREATE AN ACCOUNT</Text>
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

        <CustomInput 
        placeholder="Confirm Password" 
        value={passwordConfirm} 
        setValue={setPasswordConfirm} 
        secureTextEntry={true}
        />

        <CustomButton text="Register" onPress={onRegisterPressed}/>

        <Text style={styles.text}>By registering, you confirm that you accept our 
        <Text style={styles.link}> Terms of Use </Text> 
        and 
        <Text style={styles.link}> Privacy Policy</Text>
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

        <Text style={styles.para}>Have an account?
        <Text style={styles.extra} onPress={onlinkPressed}> Sign In</Text> 
        
        </Text>

        <Text style={styles.new}>Before creating an account fill in your  
        <Text style={styles.details} onPress={onDetailsPressed}> Profile details</Text> 
        
        </Text>



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

    link:{
        color:'#FDB075'
    },

    title:{
        fontSize:35,
        fontWeight:"bold",
        color:'#6E260E',
        margin:10,
        fontStyle: "italic"
    },
    extra:{
        color:'#ff0000'
    },
    para:{
        color:'#000000'
    },
    new:{
        color:'#000000',
        marginVertical:15
    },

    details: {
        color:'#0000ff'
    },

});
  export default SignUpScreen;