import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions, 
  Image, 
  ImageBackground, 
  Platform, 
  Linking,
  exitApp, 
  BackHandler
        } from 'react-native';
import {strings} from '../files/language/strings';
import ChooseGame from './ChooseGame';
import {Actions, goBack} from 'react-native-router-flux';

const{width, height} = Dimensions.get('window');


export default class Home extends Component {

  //exit_function uygulamadan çıkış yapılıyor
  exit_function = () => {
    BackHandler.exitApp();

  }

  //Button tanımı rendersection içinde yazılıp birden çok kere çağırılıyor içine text ve onPress alıyor
  renderSection(text,onPress){
    return( 
      <View style= {styles.section}>
        <TouchableOpacity
          onPress= {onPress}
          style= {{flex:1, justifyContent:'space-between',
            flexDirection:'row',
            alignItems:'center'}}
        >
            <Text 
            style={{textAlign:'center',  
            flex:9, color:'#ffffff'}} > {text}
            </Text> 

            <Image 
            source={require('../files/img/ok.png')} 
            style={{}} 
            />
          
        </TouchableOpacity>
      </View>

    );

  }


  render() {
    
    return (  
      <ImageBackground
        source = {require('../files/img/bg.jpg')}
        style={{width, height, justifyContent:'center',
                alignItems:'center'}} >
        <View >
           
          {this.renderSection(strings.play, 
           () => Actions.chooseGame()
           )}

          {this.renderSection(strings.contact, 
             () => Linking.openURL(Platform.OS === 'ios' ? 'https://www.ios.com/' : 'https://www.android.com/',)
            )}
          
          {this.renderSection(strings.settings,
            () => console.log('settings')
            )}

          {this.renderSection(strings.exit,
            () =>{this.exit_function()}
            )}
          
        </View>
    
      </ImageBackground>
    );
  }
}

const styles={
  container:{
    flex:1,
    backgroundColor:'red'
  },

  Areastyle:{
    flex:1,
    justiftyContent:'center',
    alignItems:'center'

  },
   //comment line
  section:{
    marginTop: 40,
    backgroundColor:'#2f363c',
    borderRadius:10,
    width:width*0.55,
    height:height*0.05,
    paddingLeft: 10,
    paddingRight: 10
  },

}
