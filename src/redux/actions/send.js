import { SEND_TEXT_START } from '../../consts/actionTypes';

export const sendTextAction = payload => ({
    type: SEND_TEXT_START,
    payload
});
