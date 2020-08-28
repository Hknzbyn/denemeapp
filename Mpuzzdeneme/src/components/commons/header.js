import React, {Component} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const{width, height} = Dimensions.get('window');


class Header extends Component {

  render() {
    const { header, headerText } = styles;

    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: height*0.08,
    width: width*1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#788B91',
   
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
})

export { Header }
