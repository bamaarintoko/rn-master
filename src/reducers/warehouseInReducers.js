import {
    UPDATE_WH_IN_SUCCESS,
    GET_INCOMING_ITEMS_SUCCESS,
    GET_INCOMING_ITEMS_FAILED,
    GET_DETAIL_INCOMING_ITEMS_SUCCESS,
    GET_DETAIL_INCOMING_ITEMS_FAILED, UPDATE_WH_IN_ERROR
} from '../utils/Constants'

export const initialFilter = {
    status: false,
    incoming_items: [],
    message: ''
};

export const warehouseFilter = {
    status: false,
    status_update: false,
    message: ''
};
export const detailWarehouseIn = {
    data: [],
    status: false,
    status_detail:false,
    message: '',
    warehouse_cost : ''
};
export function redDetailWarehouseIn(state = detailWarehouseIn, action) {
    switch (action.type){
        case GET_DETAIL_INCOMING_ITEMS_SUCCESS :
            return {
                ...state,
                data:action.data,
                status: true,
                status_detail : true,
                message: action.message,
                warehouse_cost :action.warehouse_cost
            }
        case 'REFRESH_DETAIL_INCOMING_ITEMS_SUCCESS':
            return {
                ...state,
                data: [],
                status: false,
                status_detail:false,
                message: '',
                warehouse_cost : ''
            }
        default:
            return state;
    }
}
export function redWarehouseIn(state = initialFilter, action) {
    //console.log("warehouse_in_detail", action.type);
    switch (action.type) {
        case GET_INCOMING_ITEMS_SUCCESS:
            return {
                ...state,
                incoming_items: action.incoming_items,
                status: true,
                message: action.message
            };
        case GET_INCOMING_ITEMS_FAILED :
            return {
                ...state,
                incoming_items: action.incoming_items,
                status: true,
                message: action.message
            }
        case 'GET_INCOMING_ITEMS_REFRESH' :
            return {
                ...state,
                status: false,
                incoming_items: [],
                message: ''
            }
        default:
            return state;
    }
}

export function redUpdateWarehouseIn(state = warehouseFilter, action) {
    switch (action.type) {
        case UPDATE_WH_IN_SUCCESS :
            return {
                ...state,
                status: true,
                status_update: true,
                message : action.message
            }
        case  UPDATE_WH_IN_ERROR :
            return {
                ...state,
                status:true,
                status_update:false,
                message : action.message
            }
        case 'UPDATE_WH_IN_REFRESH':
            return {
                ...state,
                status: false,
                status_update: false,
            }
        default:
            return state;
    }
}