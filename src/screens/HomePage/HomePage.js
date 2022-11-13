// import React,{useContext, useEffect, useState} from "react";
// import { ActivityIndicator, FlatList } from 'react-native';
// import {View,Text,StyleSheet, TouchableOpacity, Button} from 'react-native';
// import CustomButton from "../../components/CustomButton/CustomButton";
// import { AuthContext } from "../../navigation/AuthProvider";




// const HomePage = () => {
//     const {logout}=useContext(AuthContext);
    
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
    
//     {
      
//       {/*}
      
    
//       const getMovies = async () => {
//          try {
//           const response = await fetch('https://reactnative.dev/movies.json');
//           const json = await response.json();
//           setData(json.movies);
//         } catch (error) {
//           console.error(error);
//         } finally {
//           setLoading(false);
//         }
//       }
    
//       useEffect(() => {
//         getMovies();
//       }, []);

//     */}

//     useEffect(()=>{ 
//             getRecipeData();
//     },[])

//     const getRecipeData = () => {
//       fetch("https://api.spoonacular.com/recipes/random?apiKey=5cafdc86145b4498be7f8d4bced71b29",
//       {
//         method:"GET",
//         headers: {
//            "Content-Type":"application/json"
//         }
//       }).then(res=>{
//         return res.json()
//       }).then(res=>{
//         var data = res
//         console.log(data)
//         setLoading(false)
//         setData(data.recipes)
//       }).catch(err=>{
//         console.log(err)
//       })
//     }
    
//       return (
//         <View style={{ flex: 1, padding: 24 }}>
//            {isLoading ? <ActivityIndicator/> : (
//             <FlatList
//               data={data}
//               keyExtractor={({ id }, index) => id}
//               renderItem={({ item }) => (
//                 <Text>{item.recipes}</Text>
//               )}
//             />
//             )} 

            
              
//           <Button
//             color="red"
//             title="Logout"
//             onPress={()=> logout()}
//             >

//             </Button>
//         </View>

//       );
//     };
// }

//     {/*return(
//         <>
//         <View style={styles.root}>
//             <Text style={styles.text}>HomePage</Text>
//             <Button
//             color="red"
//             title="Logout"
//             onPress={()=> logout()}
//             >

//             </Button>
//         </View>
//       </>
//     )
//     */}



// const styles=StyleSheet.create({
//     root:{
//         alignItems:'center',
//         flex:1,
//         justifyContent:'center'
//     },
//     text:{
//         fontSize: 50,
//         color:'#000000'
//     }
// })

// export default HomePage
import {View, Text, FlatList, StyleSheet, Image, Button} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from "../../navigation/AuthProvider";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);
  const {logout}=useContext(AuthContext);


  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/random?number=10&apiKey=5cafdc86145b4498be7f8d4bced71b29',
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
        setMyData(data.recipes);
        console.log(Object.keys(data.recipes[0]));
      })
      .catch(err => {
        console.log(err);
      });
  };

  // render the students cards
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

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Health Score: {item.healthScore} </Text>
            <Text style={styles.myName}> Ready in: {item.readyInMinutes} </Text>
            <Text style={styles.myName}> Price: {item.pricePerServing} </Text>
          </View>
        </View>
       </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mainHeader}>RECIPES</Text>
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
    height: 350,
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

export default HomePage;