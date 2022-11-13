import React, { useEffect } from "react";
import {View,Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomNav from "../screens/BottomNav";

const Stack = createNativeStackNavigator();
const Navigation = () =>{
    
    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '278372222611-qvfs3mav9ktjgnscjrage5lla5gncf9n.apps.googleusercontent.com',
          });
        },[])
    

      

    return(
        
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
        
    )
}

export default Navigation;