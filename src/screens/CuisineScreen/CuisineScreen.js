import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./Screen1";
import Indian from "./Indian";
import Mexican from "./Mexican";
import Spanish from "./Spanish";
import Chinese from "./Chinese";
const Stack = createNativeStackNavigator();

const CuisineScreen = () => {
return(
    
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Screen1" component={Screen1}/>
            <Stack.Screen name="Indian" component={Indian}/>
            <Stack.Screen name="Mexican" component={Mexican}/>
            <Stack.Screen name="Spanish" component={Spanish}/>
            <Stack.Screen name="Chinese" component={Chinese}/>
            </Stack.Navigator>
)
}


export default CuisineScreen