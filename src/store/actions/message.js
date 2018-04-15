import { MESSAGE_SHOW, MESSAGE_CLEAN } from '../../constant';

export function showMessage(payload) {
    return {
        type: MESSAGE_SHOW,
        payload
    };
};

export function cleanMessage() {
    return { type: MESSAGE_CLEAN }
};