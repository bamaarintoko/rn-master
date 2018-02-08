import {AsyncStorage} from "react-native";
export default class Preference {
    static READ(stateName,defaultLoadedState = undefined){
        try {
            const serializedState = AsyncStorage.getItem('AUTH', (err, result) => {
                    return result
                }
            )
            if (serializedState === null) {
                return defaultLoadedState;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return defaultLoadedState;
        }
    }

    static WRITE(stateName, stateValue){
        try {
            const serializedState = JSON.stringify(stateValue);
        console.log(serializedState)
            AsyncStorage.setItem(stateName, serializedState);
        } catch(err) {
            // ignore write errors
        }
    }
    static REMOVE(stateName, stateValue){
        try {
            // const serializedState = JSON.stringify(stateValue);
            AsyncStorage.removeItem(stateName);
        } catch(err) {
            // ignore write errors
        }
    }
}