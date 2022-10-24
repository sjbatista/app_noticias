import React, {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { db } from './firebase.js'
import 'firebase/firestore';

//<HomeSreen>
function HomeScreen({navigation}){

  const [theNews,setNews]=useState([]);

  useEffect((()=>{
    db.collection('news').orderBy('date', 'desc').onSnapshot(snapshot=>{
      setNews(snapshot.docs.map(function(doc){
        return {info:doc.data()}
      }));
    })
  }),[])

  return(
    <View style={{flex:1}}>

    <View style={{flex:0.3}}>
      <ScrollView horizontal contentContainerStyle={{height:250, width:'200%'}} style={{flex:1}}>

      {
          theNews.map((val,index)=>{
            if(index <= 2){
              return (
              <ImageBackground source={{uri: val.info.image}} style={styles.featuredImage}>
              <TouchableOpacity onPress={()=> navigation.navigate('News',{
               title: val.info.title,
               content: val.info.content,
              imageNews: val.info.image
              })} style={{justifyContent:'flex-end', width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.4)'}}>
               <Text style={{fontSize:29, color:'white'}}>{val.info.title}</Text>
             </TouchableOpacity>
        </ImageBackground>
              )
            }
          }
          )
      }

      </ScrollView>
    </View>
          
    <View style={{flex:0.7, padding:15}}>
        <View style={{width:50, height:2, backgroundColor:'#069', position:'absolute', left:25, top:40}}>
        </View>
        <Text>More news</Text>
        <ScrollView contentContainerStyle={{padding:20}} style={{flex:1}}>

        {
          theNews.map(()=>{
            if(index > 2){
              return(
                <View style={{flexDirection:'row', marginTop:10}}>
               <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('News',{
               title: val.info.title,
               content: val.info.content,
                imageNews: val.info.image
              })}>
                <Image source={{uri: val.info.image}} style={{width:100, height:100}}/>
               <Text style={{padding:10}}>{val.info.title}</Text>
               </TouchableOpacity>
            </View>
              );
            } 
          })         
        }

        </ScrollView>
    </View>
          
    </View>
  );
}

function NewsScreen({navigation,route}){
  return(
    <ScrollView>
      <View style={{flex:1, alignItems:'center'}}>
        <Image source={{uri: route.params.imageNews}} style={{width:'100%', height:250, margin:15}} />
        <Text style={{fontSize:20, marginBottom:15}}>{route.params.title}</Text>
        <Text style={{textAlign:'justify', padding:10, fontSize:18}}>{route.params.content}</Text>
        <Button title='Go to Home' onPress={() => navigation.navigate('Home')}/>
      </View>
    </ScrollView>
    

  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='News' component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  featuredImage: {
    flex:1,
    resizeMode:'cover',
    justifyContent:'flex-end',
    width:'100%',
  }
});
