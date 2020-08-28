import {
    FETCH_QUE
  } from '../actions'; /* Soruları listeleyen reducer */
  
  const INITIAL_STATE = {};
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_QUE:
        return action.payload
      default:
        return state;
    }
  }