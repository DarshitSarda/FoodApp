import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";




const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigation = useNavigation();
    
    const onProfilePressed = () => {
        console.warn("Profile Updated");
    };
    const onLinkPressed = () =>{
        navigation.navigate("Sign In");
    };
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Profile Details</Text>
        <CustomInput 
        placeholder="Name" 
        value={username} 
        setValue={setUsername} 
        />

        <CustomInput 
        placeholder="Date of Birth" 
        value={password} 
        setValue={setPassword} 
        />

        <CustomInput 
        placeholder="Age" 
        value={passwordConfirm} 
        setValue={setPasswordConfirm} 
        />

        <CustomInput 
        placeholder="Phone Number" 
        value={username} 
        setValue={setUsername} 
        />



        <Button
        onPress={onProfilePressed}
        title='Update profile details'
        color='#1958E8'
        />
        <Text style={styles.nav} onPress={onLinkPressed}>Go back to sign in page</Text>

        
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
        color:'#22734A',
        margin:10,
    },
    nav:{
        color:"#ff0000",
        fontSize:15,
        marginTop:15,
    }
});
  export default ProfileScreen;