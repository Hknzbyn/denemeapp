import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions,Text } from 'react-native';
import { Spinner } from './spinner';

const { width, height } = Dimensions.get('window');


const MyButton = ({ spinner, title, onPress, color, backgroundColor }) => {
  return (
    <TouchableOpacity 
    onPress={onPress} 
    activeOpacity={0.6} 
    color={color}    >
     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    fontSize: 14,
    height: height * 0.09,
    width: width * 0.15,
    borderWidth:2
    
  }
})

export { MyButton }