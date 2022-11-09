import React,{useContext, useEffect, useState} from "react";
import { ActivityIndicator, FlatList } from 'react-native';
import {View,Text,StyleSheet, TouchableOpacity, Button} from 'react-native';
import CustomButton from "../../components/CustomButton/CustomButton";
import { AuthContext } from "../../navigation/AuthProvider";




const HomePage = () => {
    const {logout}=useContext(AuthContext);
    
  
    
    {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
    
      const getMovies = async () => {
         try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          setData(json.movies);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    
      useEffect(() => {
        getMovies();
      }, []);
    
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.title}, {item.releaseYear}</Text>
              )}
            />
          )}
          <Button
            color="red"
            title="Logout"
            onPress={()=> logout()}
            >

            </Button>
        </View>

      );
    };
}

    {/*return(
        <>
        <View style={styles.root}>
            <Text style={styles.text}>HomePage</Text>
            <Button
            color="red"
            title="Logout"
            onPress={()=> logout()}
            >

            </Button>
        </View>
      </>
    )
    */}



const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    text:{
        fontSize: 50,
        color:'#000000'
    }
})

export default HomePage