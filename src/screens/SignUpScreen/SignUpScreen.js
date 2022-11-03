import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../navigation/AuthProvider";






const SignUpScreen = () => {
    //const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailverified, setEmailVerified]=useState(false);
    const [passwordverified, setPasswordVerified]=useState(false);

    const {register}=useContext(AuthContext);


    const [password, setPassword] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');

    const [error,setError]=useState({field:'', message: ''});

     

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

          const handleValidPassword = val => {
            let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            
            if (val.length === 0) {
              setPasswordValidError('');
              setPasswordVerified(false)
            } else if (reg.test(val) === false) {
              setPasswordValidError('A password should contain a capital letter, a number, a special character and a minimum length of 8');
              setPasswordVerified(false)
            } else if (reg.test(val) === true) {
              setPasswordValidError('');
              setPasswordVerified(true);
            }
            };






    const onRegisterPressed = () =>{
        let signinerror = {field:'', message: ''};

      if(email==='' && password==='')
        {
          alert("Both fields are blank")
        }
      
         else if (email==='') {
            alert("Email field cannot be blank")
        }
        else if (password===''){
            alert("Password field cannot be blank")
          }
          else if(emailverified===false)
          {
            alert("Wrong email format");
          }
          else if(passwordverified===false)
          {
            alert("Wrong password format");
          }
        else {
            setError({field:'',message:''});
            console.log(email,password);
            register(email,password);
          }

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

<TextInput
    style={styles.input}
    placeholder="Password"
    value={password}
    secureTextEntry={true}
    onChangeText={value => {
      setPassword(value);
      handleValidPassword(value);
    }}
  />

{passwordValidError ? <Text style={styles.error}>{passwordValidError}</Text> : null}

        <CustomButton text="Register" onPress={()=>{onRegisterPressed()}}
        />

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
    error:{
        color:'red'
    }

});
  export default SignUpScreen;