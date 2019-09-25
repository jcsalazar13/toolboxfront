import { put, call, takeLatest } from 'redux-saga/effects';
import { SEND_TEXT_START, SEND_TEXT_ERROR, SEND_TEXT_COMPLETE } from '../../consts/actionTypes.js';

import { apiCall } from '../api';

export function* sendText ({ payload }) {
    try {
        const results = yield call(apiCall, `${payload.sendText}`, null, null, 'GET');
        yield put({ type: SEND_TEXT_COMPLETE, results });
    } catch (error) {
        yield put({ type: SEND_TEXT_ERROR, error });        
    }
}

export default function* send() {
    yield takeLatest(SEND_TEXT_START, sendText);
}