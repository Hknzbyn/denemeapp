import React, { Component } from 'react';
import {
    View, Text, TextInput, KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard, StyleSheet, Dimensions
} from 'react-native';
import { TextArea, MyButton } from './commons';
import { connect } from 'react-redux';
import { enterAnswer, sendAnswer, answerChanged } from '../redux/actions'

const { width, height } = Dimensions.get('window');


class AnswerArea extends Component {
    /* Cevabın kullanıcıdan alındığı ve Questions da kullanılan Component */


   async clickEnterAnswer() {
       await this.props.enterAnswer(this.props.useranswer);
       await this.props.QuestionsControl()
    }
    ScreenClick = () => {
        Keyboard.dismiss();
    }

    render() {
        const { AnswerAreaContainer, AnswerAreaRegulator } = styles;
        console.log(this.props.useranswer)
        return (
            <TouchableWithoutFeedback onPress={this.ScreenClick} >
                <KeyboardAvoidingView>
                    <View style={AnswerAreaContainer}>
                        <View style={AnswerAreaRegulator}>

                            <TextArea
                                placeholder= 'Enter Answer'
                                keyboardType='numeric'
                                onChangeText={answer => this.props.answerChanged(answer)}
                                multiline={true}
                                value={this.props.useranswer}
                            />

                            <MyButton
                                title='cevap'
                                onPress={() => this.clickEnterAnswer()}
                                color='blue'
                            />

                            <MyButton
                                spinner={false}
                                title='hint'
                                onPress={()=> alert('Show Hint')}
                                color='green'
                            />

                        </View>
                    </View>

                </KeyboardAvoidingView>
                
            </TouchableWithoutFeedback>

        )
    }
}

const styles = StyleSheet.create({
    AnswerAreaContainer: {
        backgroundColor: 'purple',
        padding: 10,

    },
    AnswerAreaRegulator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.08,
        width: width
    },
    

})

const mapStatetoProps = state => {

    return {
        useranswer: state.AnswerReducer.useranswer
    }
}


export default connect(mapStatetoProps, {
    enterAnswer, sendAnswer,
    answerChanged
})(AnswerArea);