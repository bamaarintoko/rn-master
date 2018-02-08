
export const initialFilter = {
    status: false,
    isLogged: false,
    isError: false,
    isLogout: false,
    user: [],
    info: {},
    message: '',
};

const initialLoginError = {
    status: false,
    status_error: false,
    message: ''
}
export function redLogError(state = initialLoginError, action) {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                status: true,
                status_error: true,
                message: action.message
            }
        case 'LOGIN_ERROR_REFRESH':
            return {
                ...state,
                status: false,
                status_error: false,
                message: ''
            }
        default: return state;
    }
}


export function redAuth(state = initialFilter, action) {
    //console.log("reducers", action);
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                status: true,
                isLogged: true,
                isError: false,
                isLogout: false,
                user: action.user,
                info: action.info,
                message: 'login success'
            };
        case 'LOGIN_SUCCESS_REFRESH':
            return {
                ...state,
                status: false,
                isLogged: false,
                isError: false,
                isLogout: false,
                message: '',
            }
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                status: true,
                isLogged: false,
                isError: false,
                isLogout: true,
                user: [],
                info: {},
                message: 'logout success'
            }
        case 'LOG_OUT_REFRESH':
            return {
                ...state,
                isLogged: false,
                isError: false,
                isLogout: false,
                user: [],
                info: {},
                message: '',
            }
        case 'UPDATE_SUCCESS':
            return {
                ...state,
                user: action.user,
                updateSuccess: true
            }
        case 'UPDATE_REFRESH':
            return {
                ...state,
                updateSuccess: false
            }
        default:
            return state;
    }
}