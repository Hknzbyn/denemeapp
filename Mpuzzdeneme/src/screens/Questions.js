import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import AnswerArea from '../components/answerArea';
import QuestionArea from '../components/questionArea';

const{width, height} = Dimensions.get('window');


 class Questions extends Component {
 
  render() {
    const{ container,questionareagen,answerarea,questionarea } = styles;
    return (
      
      <View style={container}>
          <View style={questionareagen}>  
              <View style={questionarea}>
                
              </View>
          </View>

            <KeyboardAvoidingView behavior ={"position"}> 
              <View style ={answerarea}>
                <AnswerArea />
              </View>
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


export default Questions ;