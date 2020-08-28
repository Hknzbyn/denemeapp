import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { strings } from '../files/language/strings';
import { Actions } from 'react-native-router-flux';
import { Card } from '../components/commons';

const { width, height } = Dimensions.get('window');

export default class QuestionTypeCard extends Component {
  /* Oyun tipinin seçilmesini sağlayan ChooseGame e bağlanan Component */

  render() {
    return (
      <ImageBackground
        source={require('../files/img/bg.jpg')}
        style={styles.backgroundStyle}
      >
        <Image source={require('../files/img/logo.png')} />

        <View style={styles.selecttypebox}>

          <Card
            text1={strings.quetry}
            text2='0/100 '
            onPress={() => Actions.simplepuzzle()}
          />

          <Card
            text1={strings.anstry}
            text2='0/100 '
            onPress={() => Actions.questions()}
          />

          <Card
            text1='Question Listdeneme'
            text2='0/100 '
            onPress={() => Actions.questionlist()}
          />

        </View>


      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  selecttypebox: {
    marginTop: 10,
    height: height * 0.30,
    width: width * 0.85,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: width * 0.01,
    paddingRight: width * 0.01,

  },
  backgroundStyle: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: height * 0.17
  },
  cardstyle: {
    backgroundColor: '#31373c',
    height: height * 0.25,
    width: width * 0.30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: width * 0.01,
    paddingRight: width * 0.01

  },
});

