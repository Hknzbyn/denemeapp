import {
    ANSWER_CHANGED,
    TRUE_USER_ANSWER

} from '../Types';  /* Cevap aksiyonları  */

const INITIAL_STATE = {
    useranswer: '',
    trueUserAnswer: ''

};

export const AnswerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANSWER_CHANGED:
            return { ...state, useranswer: action.payload }
        case TRUE_USER_ANSWER:
            return { ...state, trueUserAnswer: action.payload }
        default:
            return state;

    }

}

