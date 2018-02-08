import Api from "../utils/Api";
import md5 from "crypto-js/md5";
import store from "react-native-simple-store";

export function actOnLogOut() {
    return dispatch => {
        dispatch({
            type: 'LOG_OUT'
        })
        store.delete('AUTH')
    }
}