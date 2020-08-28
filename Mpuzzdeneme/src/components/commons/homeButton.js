import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { strings } from '../../files/language/strings';
import { Actions } from 'react-native-router-flux';

const{width, height} = Dimensions.get('window');

class HomeButton extends Component{

  render() {
    return (
        <View style= {styles.sectiongen}>
            <TouchableOpacity
            onPress= {onPress}
            style= {styles.section}
            >
                <Text 
                style={styles.textstyle} > {text}
                </Text> 

                <Image 
                source={require('../../files/img/ok.png')} 
                style={{}} 
                />
            
            </TouchableOpacity>
      </View>
        
    )
  }
}

const styles= StyleSheet.create({
    sectiongen:{
        marginTop: 40,
        backgroundColor:'#2f363c',
        borderRadius:10,
        width:width*0.55,
        height:height*0.05,
        paddingLeft: 10,
        paddingRight: 10
      },
      section:{
        flex:1, 
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
      },
      textstyle:{
        textAlign:'center',  
        flex:9, 
        color:'#ffffff'
      }


})