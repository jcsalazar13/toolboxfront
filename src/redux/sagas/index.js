import { all } from 'redux-saga/effects';
import send, { sendText } from './send'

export default function* rootSaga() {
	yield all([
		send()
	]);
}
