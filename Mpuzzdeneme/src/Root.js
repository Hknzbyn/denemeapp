import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import { strings } from './files/language/strings';
import Home from './screens/Home';
import ChooseGame from './screens/ChooseGame';
import SimplePuzzle from './screens/SimplePuzzle';
import Questions from './screens/Questions';
import QuestionList from './components/QuestionList';


/* ++ */
export default class Root extends Component {
  render() {
    return (

      <Router navigationBarstyle={styles.navbar}>
        <Stack key="Root" >

            <Scene key="home"               component={Home}                title="Home"                hideNavBar={true}  />
            <Scene key="chooseGame"         component={ChooseGame}          title="ChooseGame"          hideNavBar={true}  />
            <Scene key="simplepuzzle"       component={SimplePuzzle}        title="SimplePuzzle"        hideNavBar={true}  />
            <Scene key="questions"          component={Questions}           title="Questions"           hideNavBar={true}  />
            <Scene key="questionlist"       component={QuestionList}        title="QuestionList"        hideNavBar={true} initial />

        </Stack>
      </Router>
    );
  }
}

const styles = {
  navbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textalign: 'center',
   


  },


}