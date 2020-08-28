import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {TextArea} from '../components/commons'
import QuestionArea from '../components/questionArea';

const{width, height} = Dimensions.get('window');

export default class SimplePuzzle extends Component {
  state = {
    useranswer: '' 
  }

  
  render() {
    const{ container,questionareagen,answerarea,questionarea } = styles;
    return (
      

      <View style={container}>
        <View style={questionareagen}>  
          <View style={questionarea}>
            <QuestionArea />
          </View>
        </View>

      <KeyboardAvoidingView behavior ={"position"}> 
        <TouchableOpacity style ={answerarea}>
          <View>

            <TextArea 
            inputPlaceHolder='Cevabı Giriniz' 
            onChangeText ={(text) => {
              this.setState({
                useranswer: text
              })
            }}
            value={this.state.useranswer}
            />

          </View>

        </TouchableOpacity>
      </KeyboardAvoidingView>    
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'#F5FCFF'
  },
  questionarea:{
    height:height*0.74,
    width:width*0.99,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    textAlign:'center',

  },
  questionareagen:{
    height:height*0.75,
    width:width*1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',

  },
  answerarea:{
    height:height*0.22,
    width:width*1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    
    
    
  },
})