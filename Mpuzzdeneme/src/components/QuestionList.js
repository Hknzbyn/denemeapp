import React, { Component } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Dimensions,
  StyleSheet, 
  TextInput ,
  KeyboardAvoidingView, 
  TouchableOpacity, 
  Button,
  TouchableWithoutFeedback
  } from 'react-native';
import {connect} from 'react-redux';
import { enterAnswer, sendAnswer, answerChanged } from '../redux/actions'
import AnswerArea from '../components/answerArea';
import { MyButton } from './commons';


const { width, height } = Dimensions.get('window')

/* Soruları listeletmeye calıştıgım Component */
 class QuestionList extends Component { 
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0
    useranswer = ''
    quizEnd = false
    
    this.ChangeUserAnswer=this.ChangeUserAnswer.bind(this)

    const {questions} = this.props;
    const qno = this.qno
    const que = questions.quiz.quiz1
    arrnew = Object.keys(que).map( function(k) { return que[k] });
    this.state = {
      question : arrnew[qno].question,
      hints : arrnew[qno].hints,
      trueanswer : arrnew[qno].trueanswer,
      
    }
  }

  ChangeUserAnswer(useranswer){
    this.setState({
      useranswer:useranswer
    })
  }

  loadQuiz = () => {
    const qno = this.qno
    this.setState(()=> {
      return{
        question :   arrnew[qno].question,
        hints :      arrnew[qno].hints,
        trueanswer : arrnew[qno].trueanswer,
      }
    });
  }

  showNextQuestion = () => {
    const { useranswer, trueanswer, score } = this.state

    if(useranswer === trueanswer){
      score ++
    }

    this.setState({
      qno : this.state.qno + 1 ,
      useranswer: null
    })
  }

  componentDidMount() {
    this.loadQuiz();  
  }

  checkAnswer = trueanswer => {
      this.setState({
        useranswer: trueanswer,

      })
    } 

  componentDidUpdate(prevProps, prevState) {
    const qno = this.qno
    if(this.state.qno != prevState.qno ) {
      this.setState(()=> {
        return{
          question : arrnew[qno].question,
          hints : arrnew[qno].hints,
          trueanswer : arrnew[qno].trueanswer,
        }
      });

    }
  }

  finishQuiz = () => {
    const {questions}=this.props ;
    if(this.state.qno === questions.length - 1 )
    this.setState({
      quizEnd: true
    })
  }
  
  

  render() {
    
    
      console.log(this.state.useranswer);
      const{ container,questionareagen,answerarea,questionarea } = styles;
    return (
      <View style={container}>
      <View style={questionareagen}>  
          <View style={questionarea}>
            
            <Text style={{fontSize:33}}>
              {this.state.question}
            </Text>

            <Text style={{fontSize:33}}>
              {this.state.trueanswer}
            </Text>

            <Text style={{fontSize:33}}>
              {this.state.hints.hint1}
            </Text>

            <Text style={{fontSize:33}}>
              {this.state.hints.hint2}
            </Text>

            <Text style={{fontSize:33}}>
              {this.state.useranswer}
            </Text>

            

          </View>
      </View>

        <KeyboardAvoidingView behavior ={"position"}> 
          <View style ={answerarea}>
              <TextInput
                style={styles.Inputstyle}
                
                placeholder= 'Enter Answer'
                keyboardType='numeric'
                onChangeText={this.ChangeUserAnswer}
                multiline={false}
                value={this.state.useranswer}
                
            />
          <View  >
            
          </View>
           
                                    
          </View>
          <Text> Buradasın {this.state.useranswer}  </Text>
        </KeyboardAvoidingView>    
   
    </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
      height:height,
      width:width,
      
  },
  Inputstyle:{
    borderWidth: 1,
    borderColor: '#CFD8DC',
    height: height*0.06,
    width: width*0.50,
    marginLeft:10,
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
    flexDirection:'row'

  },
  answerarea:{
    height:height*0.12,
    width:width*1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'purple'
  },

})

const mapStatetoProps = state => {
    return{
        questions: state.questions,
        useranswer: state.AnswerReducer.useranswer
    }
}

export default connect(mapStatetoProps, {
    enterAnswer, sendAnswer,
    answerChanged,
}) (QuestionList) ;