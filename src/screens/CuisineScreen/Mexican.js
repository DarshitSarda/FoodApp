import {View, Text, FlatList, StyleSheet, Image, Button} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from "../../navigation/AuthProvider";

const Mexican = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);
  const {logout}=useContext(AuthContext);


  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/complexSearch?cuisine=mexican&number=22&apiKey=5cafdc86145b4498be7f8d4bced71b29',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        var data = res;
        console.log(data);
        setIsLoaded(false);
        setMyData(data.results);
        console.log(Object.keys(data.results[0]));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> {item.title} </Text>
          </View>

        </View>
       </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mainHeader}>Mexican Cuisines</Text>
      <Button
      style={styles.button}
      color="red"
      title="Click here to logout"
      onPress={()=> logout()}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={myData}
        renderItem={showUserData}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: '#293462',
  },
  card: {
    width: 350,
    height: 250,
    backgroundColor: '#293462',
    borderRadius: 10,
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EC9B3B',
    paddingVertical: 10,
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    paddingRight: 10,
    textAlign:'center'
  },
  bioData: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'JosefinSans_400Regular',
  },
  mainHeader: {
    fontSize: 60,
    color: '#990000',
    textAlign: 'center',
    paddingTop: 20,
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 5},
    textShadowRadius: 10
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#F24C4C',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 13,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
  button:{
    padding: 20
  }
});

export default Mexican