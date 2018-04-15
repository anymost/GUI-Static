import { PROGRAM_RUN_STATUS, PROGRAM_BUILD_STATUS, PROGRAM_INSTALL_STATUS } from '../../constant';

export function changeProgramInstallStatus(status) {
    return {
        type: PROGRAM_INSTALL_STATUS,
        status
    }
}

export function changeProgramRunStatus(status) {
    return {
        type: PROGRAM_RUN_STATUS,
        status
    }
}

export function changeProgramBuildStatus(status) {
    return {
        type: PROGRAM_BUILD_STATUS,
        status
    }
}