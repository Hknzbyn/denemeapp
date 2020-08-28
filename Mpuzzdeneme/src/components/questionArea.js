import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchQue } from '../redux/actions';

/* + */
class QuestionArea extends Component {
    /* Soruların görüneceği Questions screen e bağlanan Component */

   

render() {
    return(
        <View>
            <Text>deneme</Text>
        </View>

    )
    }
}


const mapStatetoProps = state => {
    debugger;
  
    return {
  
    }
  }

export default connect (mapStatetoProps, {
    fetchQue
}) (QuestionArea);