import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen({navigation}){
  return(
    <View style={{flex:1}}>
      <ScrollView horizontal contentContainerStyle={{height:250, width:'400%'}} style={{flex:1}}>
        <ImageBackground source={{uri:'https://classic.exame.com/wp-content/uploads/2021/11/bolsonaro-lula.jpg?quality=70&strip=info&w=1024'}} style={styles.featuredImage}>

          <TouchableOpacity onPress={()=> navigation.navigate('News',{
            title:'Efeito "BolsoLula" traz discórdia em redes sociais',
            content:'Podemos tentar evitar, mas é impossível fugir de todas as discussões políticas levantadas em ano eleitoral. Neste período, o tema domina todas as conversas, sobretudo as do almoço em família. O Metrópoles conta três histórias de pessoas que tiveram o núcleo familiar abalado por brigas e divisão devido às divergências políticas. Por motivos de segurança, o portal optou por não expor imagens dos entrevistados. Fabíola Alves Fernandes, 33 anos, afirma que as eleições sempre renderam brigas no convívio familiar. As diferentes opiniões entre a UX designer e o marido no pleito de 2018 quase causaram a separação do casamento. “Já aconteceu de eu cortar pessoas da minha vida por política. Eu quase me separei do meu marido por isso”, conta.',
            imageNews:'https://classic.exame.com/wp-content/uploads/2021/11/bolsonaro-lula.jpg?quality=70&strip=info&w=1024'
          })} style={{justifyContent:'flex-end', width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.4)'}}>
            <Text style={{fontSize:29, color:'white'}}>Testing</Text>
          </TouchableOpacity>

        </ImageBackground>

        <ImageBackground source={{uri:'https://www.agraer.ms.gov.br/wp-content/uploads/2015/09/Dia-Quente-672x372.jpg'}} style={styles.featuredImage}>
          <TouchableOpacity style={{justifyContent:'flex-end', left:0,top:0, width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.4)'}}>
            <Text style={{fontSize:29, color:'white'}}>Testing</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground source={{uri:'https://www.infomoney.com.br/wp-content/uploads/2020/10/GettyImages-1000964844.jpg?resize=916%2C515&quality=50&strip=all'}} style={styles.featuredImage}>
          <TouchableOpacity style={{justifyContent:'flex-end', left:0,top:0, width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.4)'}}>
            <Text style={{fontSize:29, color:'white'}}>Testing</Text>
          </TouchableOpacity>
        </ImageBackground>
        
        <ImageBackground source={{uri:'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}} style={styles.featuredImage}>
          <TouchableOpacity style={{justifyContent:'flex-end', left:0,top:0, width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.4)'}}>
            <Text style={{fontSize:29, color:'white'}}>Testing</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>

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
    width:'100%'
  }
});
