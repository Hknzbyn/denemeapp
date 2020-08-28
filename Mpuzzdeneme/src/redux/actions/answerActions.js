import {
    ANSWER_CHANGED,
    TRUE_USER_ANSWER
  } from '../Types';

export const sendAnswer = (useranswer) => {
    console.log(useranswer);

}

export const enterAnswer = (useranswer) => {
  console.log("useranswer",useranswer)
    return {
        type : TRUE_USER_ANSWER,
        payload : useranswer
    }
}

export const answerChanged = (answer) => {
    return (dispatch, getState) => {
      // const{userAnswer}=getState().answerReducer
      dispatch({
        type: ANSWER_CHANGED,
        payload: answer
      });
    };
  };
  




// export const questionControl = () =>{
//   return()
// }
