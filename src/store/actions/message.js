import { MESSAGE_SHOW, MESSAGE_CLEAN } from '../../constant';

export const showMessage = (payload) => {
    return {
        type: MESSAGE_SHOW,
        payload
    }
};

export const cleanMessage = () => {
    return { type: MESSAGE_CLEAN }
};