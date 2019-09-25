import { get } from 'lodash'
import { SEND_TEXT_START, SEND_TEXT_ERROR, SEND_TEXT_COMPLETE } from '../../consts/actionTypes.js';

const initialState = {};

export default function(state = initialState, action){
    switch (action.type) {
        case SEND_TEXT_START: 
            return { ...state, isLoading: true };
            break;
        case SEND_TEXT_ERROR:
            return { ...state, isLoading: false, texts: null };
            break;
        case SEND_TEXT_COMPLETE:
            return { ...state, isLoading: false, textResults: action.results.data };            
            break;
        default:
            return { ...state };
    }
}   

