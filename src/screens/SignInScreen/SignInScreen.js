import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView, Button} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';



const SignInScreen = () => {

    {/*}
    const [username,setUsername]=useState('');
    const [password, setPassword]=useState('');
    */}

    const [email,setEmail]=useState('');
    const [emailverified, setEmailVerified]=useState(false);
    const [passwordverified, setPasswordVerified]=useState(false);

  {/*}
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  */}

    const [password,setPassword]=useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');


    const [error,setError]=useState({field:'', message: ''});

    const{height} = useWindowDimensions();
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

    const onSignInPressed =val=>{
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
            navigation.navigate("Bottom Nav");
          
        }
      }
          
        {/*let signinerror = {field:'', message: ''};
        if (email==='') {
            signinerror.field='email';
            signinerror.message='Invalid Email ID';
            setError(signinerror);
        }
        else if (password===''){
            signinerror.field='password';
            signinerror.message='Please enter correct password';
            setError(signinerror);
        }
        else {
            setError({field:'',message:''});
            navigation.navigate("Bottom Nav");
        }*/}
    const onCreatePressed = () =>{
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
      
      {/*<View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
      */}

        <Text style={styles.text}>The CookBook</Text>
        <Image 
        source={Logo} 
        style={[styles.Logo, {height: height*0.25}]} 
        resizeMode="contain"/>
        
        {/*
        <CustomInput 
        placeholder="Email ID" 
        value={username}
        setValue={setUsername}
        />
        <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry  
        />
        */}
        
        
         

        {/*<TextInput
        placeholder="Enter Email ID"
        style={styles.inputField}
        value={email}
        onChangeText={value=>setEmail(value)}
        />

        {error.field==='email' && (
            <Text style={styles.error}>{error.message}</Text>
        )}

        <TextInput
        placeholder="Enter Password"
        style={styles.inputField}
        value={password}
        onChangeText={value=>setPassword(value)}
        />

        {error.field==='password' && (
            <Text style={styles.error}>{error.message}</Text>
        )} 
        */}

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

        <CustomButton 
        text="Sign In" 
        onPress={onSignInPressed}/>
        
        <Text style={styles.forgot} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
        
        
        <Text style={styles.para}>New here?
        <Text style={styles.extra} onPress={onCreatePressed}> Create account</Text> 
        
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
      color:'red'
    }
});
  export default SignInScreen