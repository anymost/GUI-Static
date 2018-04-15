import { PROGRAM_RUN_STATUS, PROGRAM_BUILD_STATUS, PROGRAM_INSTALL_STATUS } from '../../constant';

const initState = {
    installStatus: 'stopped',
    runStatus: 'stopped',
    buildStatus: 'stopped'
};

export default function programStatus(state = initState, action) {
    switch(action.type) {
        case PROGRAM_INSTALL_STATUS:
            return { ...state, installStatus: action.status };
        case PROGRAM_RUN_STATUS:
            return { ...state, runStatus: action.status };
        case PROGRAM_BUILD_STATUS:
            return { ...state, buildStatus: action.status};
        default:
            return state;
    }
}