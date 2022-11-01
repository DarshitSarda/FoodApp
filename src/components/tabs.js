{/*import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SignInScreen from "../screens/SignInScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Tabs = () =>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
      
              if (route.name === 'Sign In') {
                iconName = focused
                  ? 'glass'
                  : 'glass';
              } else if (route.name === 'Sign Up') {
                iconName = focused ? 'arrow-circle-down' : 'arrow-circle-down';
              }
              else if (route.name === 'Profile') {
                iconName = focused ? 'cogs' : 'cogs';}
                else if (route.name === 'Forgot Password') {
                    iconName = focused ? 'key' : 'key';}
      
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="Sign In" component={SignInScreen} />
            <Tab.Screen name="Sign Up" component={SignUpScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
        </Tab.Navigator>
    )
}
export default Tabs;
*/}