import React from "react";
import {View,Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomNav from "../screens/BottomNav";

const Stack = createNativeStackNavigator();
const AppStack = () =>{
    return(
        
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Bottom Nav" component={BottomNav}/>
            </Stack.Navigator>
        
    )
}

export default AppStack;