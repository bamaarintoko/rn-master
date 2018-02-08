import Api from "../../utils/Api";
import md5 from 'crypto-js/md5';
import Preference from "../../utils/Preference"
import {AsyncStorage} from "react-native";
import store from 'react-native-simple-store';

export function actLogin(val) {
    const params = {
        warehouse_email: val.email,
        warehouse_password: md5(md5(val.password).toString()).toString()
    }
    return (dispatch, getState) => {
        Api.POST('login', params)
            .then((response) => {
                //console.log("----->",response.data)
                if (response.data.status) {

                    dispatch({
                        type: 'Home',
                        user: response.data.data_warehouse,
                        info:response.data.info
                    });
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        user: response.data.data_warehouse,
                        info:response.data.info
                    })

                    store.save('AUTH', getState().redAuth.user)
                } else {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        message: 'Wrong password or username'
                    })
                }
            })
            .catch(error => dispatch({
                type: 'LOGIN_ERROR',
                message: 'Network Error'
            }))
    }
}

export function actSplashLogin(val) {
    const params = {
        warehouse_email: val.warehouse_email,
        warehouse_password: val.warehouse_password
    }
    return (dispatch, getState) => {
        Api.POST('login', params)
            .then((response) => {
                //console.log("----->",response.data)
                if (response.data.status) {

                    dispatch({
                        type: 'Home',
                        user: response.data.data_warehouse,
                        info: response.data.info,
                    });
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        user: response.data.data_warehouse,
                        info: response.data.info,
                    })
                    //console.log("-->", getState().redAuth.user)
                    store.save('AUTH', getState().redAuth.user)
                } else {
                    store.delete('AUTH')
                    dispatch({
                        type: 'LOGIN_FAILED',
                        message: 'Wrong password or username'
                    })
                    dispatch({
                        type:'LOG_OUT',
                        message: 'Wrong password or username'
                    })
                    // this.props.navigation.dispatch({type: 'LOG_OUT'})
                }
            })
            .catch(error => dispatch({
                type: 'LOGIN_FAILED',
                message: 'Network Error'
            }))
    }
}