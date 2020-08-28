import { combineReducers } from 'redux';
import QuestionReducer from './questionReducer';
import {AnswerReducer} from './answerReducer';
import questionListReducer from './questionListReducer';


export default combineReducers({
    questions: QuestionReducer,
    AnswerReducer,
    questionListReducer,

});