import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";



const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [emailverified, setEmailVerified]=useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();

    const handleValidEmail = val => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if (val.length === 0) {
        setEmailValidError('');
        setEmailVerified(false)
      } else if (reg.test(val) === false) {

        setEmailValidError('Enter valid email address');
        setEmailVerified(false)
      } else if (reg.test(val) === true) {
        setEmailValidError('');
        setEmailVerified(true);
        
      }
      };
    const onPressLearnMore = () =>{
      let signinerror = {field:'', message: ''};

      if(email==='')
        {
          alert("Field is blank")
        }
          else if(emailverified===false)
          {
            alert("Wrong email format");
          }
        else {
            
            console.warn("Reset password email sent")
          
        }
    }
    const onRegisterPressed = () =>{
        console.warn("Creating new account");
    };

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>RESET PASSWORD</Text>
        <TextInput
    style={styles.input}
    placeholder="Email"
    value={email}
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setEmail(value);
      handleValidEmail(value);
    }}
  />

{emailValidError ? <Text style={styles.error}>{emailValidError}</Text> : null}


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
    input:{
      color:'black',
        backgroundColor: '#f9f9f9',
        width:'100%',
        borderColor: '#c6c6c6',
        borderRadius: 15,
        borderWidth: 2,
        paddingHorizontal: 20,
        marginVertical:15,
    },
    error:{
      color:'red',
      padding:10
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