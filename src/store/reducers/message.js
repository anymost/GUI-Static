import { MESSAGE_SHOW, MESSAGE_CLEAN } from '../../constant';

const initMessage = {
    type: '',
    content: ''
};

export default function message(state = initMessage, action) {
    const { type, payload } = action;
    console.log(action);
    switch(type) {
        case MESSAGE_SHOW:
            return {
                type: payload.type,
                content: payload.content
            };
        case MESSAGE_CLEAN:
            return initMessage;
        default:
            return state;
    }
}