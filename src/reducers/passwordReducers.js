export const initialFilter = {
    updateSuccess: false,
    updateFailed: false,
    message:''
};

export function redPass(state = initialFilter, action) {
    //console.log("passwordReducers", action.type);
    switch (action.type) {
        case 'EDIT_PASS_SUCCESS':
            return {
                ...state,
                updateSuccess: true,
                updateFailed: false,
                message: action.message
            };
        case 'EDIT_PASS_FAILED':
            return {
                ...state,
                updateSuccess: false,
                updateFailed: true,
                message: action.message
            };
        case 'EDIT_PASS_REFRESH':
            return {
                ...state,
                updateSuccess:false,
                updateFailed: true,
            }
        default:
            return state;
    }
}