import React, {useContext,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '.';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider'
import AppStack from './AppStack';


const Routes = () =>{

    const {user,setUser} =useContext(AuthContext);
    const [initializing, setInitializing]=useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return(
        <NavigationContainer>
            {user ? <AppStack/> : <Navigation/>}
        </NavigationContainer>
    );
};

export default Routes;