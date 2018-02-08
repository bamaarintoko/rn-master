import {
    GET_OUTGOING_ITEMS_ERROR,
    GET_OUTGOING_ITEMS_FAILED,
    GET_OUTGOING_ITEMS_SUCCESS, UPDATE_WH_IN_FAILED,
    UPDATE_WH_OUT_SUCCESS,
    UPDATE_WH_OUT_FAILED
} from '../utils/Constants'
import {initialFilter} from "./warehouseInReducers";
export const initialOutGoingItems = {
    status: false,
    outgoing_items : [],
    message:''
};

export const initialUpdateOutGoingItems = {
    status: false,
    status_update : false,
    message:''
}

export function redWarehouseOut(state = initialOutGoingItems, action) {
    //console.log("reducers", action.type);
    switch (action.type) {
        case GET_OUTGOING_ITEMS_SUCCESS:
            return {
                ...state,
                status: true,
                outgoing_items:action.outgoing_items,
                message:action.message
            };
        case GET_OUTGOING_ITEMS_FAILED:
            return {
                ...state,
                status:true,
                outgoing_items:action.outgoing_items,
                message:action.message
            };
        case GET_OUTGOING_ITEMS_ERROR:
            return {
                ...state,
                status:true,
                outgoing_items:action.outgoing_items,
                message:action.message
            }
        case 'GET_OUTGOING_ITEMS_REFRESH':
            return {
                ...state,
                status:false,
                outgoing_items:action.outgoing_items,
                message:action.message
            }
        default:
            return state;
    }
}

export function redUpdateWarehouseOut(state = initialUpdateOutGoingItems, action) {
    switch (action.type) {
        case UPDATE_WH_OUT_SUCCESS:
            return {
                ...state,
                status: true,
                status_update:true,
                message:action.message
            };
        case UPDATE_WH_OUT_FAILED:
            return {
                ...state,
                status:true,
                status_update:false,
                message:action.message
            }
        case 'UPDATE_WH_OUT_REFRESH':
            return {
                ...state,
                status:false,
                status_update:false,
            }
        default:
            return state;
    }
}