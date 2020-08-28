import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { strings } from '../../files/language/strings';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

const Card = ({ onPress, text1, text2 }) => {
  return (

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.textgenstyle}
    >
      <View style={styles.textonearea} >
        <Text style={styles.textonestyle}>  {text1}  </Text>
      </View>

      <View style={styles.texttwoarea} >
        <Text style={styles.texttwostyle}>  {text2}  </Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textonestyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#d8d3cf',
    fontSize: 18
  },

  texttwostyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontStyle: 'italic',
    backgroundColor: '#31373c',
    borderRadius: 1,
    color: '#d8d3cf',

  },

  textgenstyle: {
    backgroundColor: '#31373c',
    height: height * 0.25,
    width: width * 0.25,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',


  },
})

export { Card }
