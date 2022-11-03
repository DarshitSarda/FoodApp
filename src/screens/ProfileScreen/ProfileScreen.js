import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";



const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [age, setAge] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const navigation = useNavigation();
    
    const onProfilePressed = () => {
        navigation.navigate("Sign Up");
    };
    const onLinkPressed = () =>{
        navigation.navigate("Sign In");
    };

    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Profile Details</Text>
        <Text>Before creating an account please fill in your personal details</Text>
        <CustomInput 
        placeholder="Name" 
        value={name} 
        setValue={setName} 
        />
          
          
          <CustomInput 
            placeholder="Date of Birth" 
            value={birth} 
            setValue={setBirth} 
          />


        <CustomInput 
        placeholder="Age" 
        value={age} 
        setValue={setAge} 
        />

        <CustomInput 
        placeholder="Phone Number" 
        value={phonenumber} 
        setValue={setPhonenumber} 
        />
        
        <Button
        onPress={onProfilePressed}
        title='SAVE DETAILS'
        color='#22734A'
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
        padding:10
    }
});
  export default ProfileScreen;