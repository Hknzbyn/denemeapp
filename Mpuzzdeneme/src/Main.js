import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './redux/reducers';

import Root from './Root';
/* ++ */
export default class Main extends Component {
 
  render() {
    const middlewares = [ReduxThunk];
    const store = createStore(reducer, {}, compose(applyMiddleware(...middlewares)));
    return (
      <Provider store={store}>
        
          <Root />
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
      
      

  }

})