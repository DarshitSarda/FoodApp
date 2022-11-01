import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import CuisineScreen from "../CuisineScreen";
import FavouriteScreen from "../FavouriteScreen";
import SupportScreen from "../SupportScreen";
import HomePage from "../HomePage";

const Tab = createBottomTabNavigator();
import {View,Text,StyleSheet} from 'react-native';



const BottomNav = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
      
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Cuisines') {
                iconName = focused ? 'cutlery' : 'glass';
              }
              else if (route.name === 'Support') {
                iconName = focused ? 'cogs' : 'cog';}
                else if (route.name === 'Favourites') {
                    iconName = focused ? 'heart' : 'heart-o';}
      
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#eb1c15',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
          })}>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="Cuisines" component={CuisineScreen}/>
            <Tab.Screen name="Favourites" component={FavouriteScreen}/>
            <Tab.Screen name="Support" component={SupportScreen}/>
        </Tab.Navigator>
    )
}

export default BottomNav