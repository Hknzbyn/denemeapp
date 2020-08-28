import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from './src/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles={
  container:{
    flex: 1
  }

}
