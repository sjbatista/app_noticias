import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen({navigation}){
  return(
    <View style={{flex:1}}>
      <ScrollView horizontal contentContainerStyle={{height:250, width:'200%'}} style={{flex:1}}>
        <ImageBackground source={{uri:'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}} style={styles.featuredImage}>

          <View style={{position:'absolute', left:0,top:0, width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.4)'}}></View>
          <Text style={{fontSize:29, color:'white'}}>Testing</Text>

        </ImageBackground>
      </ScrollView>
    </View>

  );
}

function NewsScreen({navigation}){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text></Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')}
      />
    </View>

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
    width:'50%'
  }
});
