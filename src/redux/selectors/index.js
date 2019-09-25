import { get } from 'lodash';

export const isSendLoading = state => get(state, 'send.isLoading');
export const textResults = state => get(state, 'send.textResults');
