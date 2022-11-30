import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Screen1 = () => {
    const navigation = useNavigation();
    const OnIndianPressed = () => {
        navigation.navigate('Indian');
    }
    
    const OnMexicanPressed = () => {
        navigation.navigate('Mexican');
    }
    
    const OnSpanishPressed = () => {
        navigation.navigate('Spanish');
    }
    
    const OnChinesePressed = () => {
        navigation.navigate('Chinese');
    }
    return(
        <View style={styles.root}>
        <Text style={styles.text}>CUISINES</Text>
        <View style={styles.new}>
        <Button
        title='Indian'
        color='#39B2B3'
        onPress={OnIndianPressed}
        />


        <Text>   </Text>


        <Button
        title='Mexican'
        color='#39B2B3'
        onPress={OnMexicanPressed}
        />


        <Text>   </Text>
        
        
        <Button
        title='Spanish'
        color='#39B2B3'
        onPress={OnSpanishPressed}
        />

        <Text>   </Text>
        
        
        <Button
        title='Chinese'
        color='#39B2B3'
        onPress={OnChinesePressed}
        />

        </View>
    </View>
    )
}
const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        flex:1,
        },
        new:{
            flexDirection:'row',
            padding: 20
        },
    text:{
        fontSize: 60,
        color: '#990000',
        textAlign: 'center',
        paddingTop: 20,
        fontWeight:'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 2, height: 5},
        textShadowRadius: 5
    }
})

export default Screen1