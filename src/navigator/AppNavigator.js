import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {
    BackHandler, View, StatusBar
} from 'react-native';
import screenHome from '../screen/home/screen_home'
import screenSplash from '../screen/splash/screen_splash'
// import screenAdd from '../screen/home/screen_add'
// import screenDetail from '../screen/detail/screen_detail'
// import screenAddDet from '../screen/detail/screen_add_det'
// import LoginScreen from '../screen/login/Login'
// import screen_parent from '../screen/warehouse_bill/screen_parent'
// import {Setting, ChangePassword, EditWarehouse} from '../screen/setting'
// import {InComingItems, Test, OutGoingItems,DetailOutGoingItems,DetailIncomingItems} from '../screen/warehouse'
import {addNavigationHelpers, DrawerNavigator, StackNavigator} from "react-navigation";
import {connect} from "react-redux";
import Drawer from './Drawer'
// import AppDrawer from './AppDrawer'
import {Container, Content, List, ListItem, Separator, Thumbnail} from "native-base";
import { addListener } from '../utils/Redux';

const sideBar = DrawerNavigator({
    Home: {screen: screenHome},

}, {
    contentComponent: Drawer
    // contentComponent: AppDrawer
});


export const AppNavigator = StackNavigator({
    Splash: {screen: screenSplash},
    // Login: {screen: LoginScreen},
    // // Menu: {screen: AppDrawer},
    Menu: {screen: sideBar},
    // Add: {screen: screenAdd},
    // Detail: {screen: screenDetail},
    // AddDet: {screen: screenAddDet},
    // InComingItems: {screen: InComingItems},
    // OutGoingItems: {screen: OutGoingItems},
    // DetailOutGoingItems: {screen: DetailOutGoingItems},
    // Setting: {screen: Setting},
    // ChangePassword: {screen: ChangePassword},
    // EditWarehouse: {screen: EditWarehouse},
    // DetailIncomingItems_: {screen: DetailIncomingItems},
    // Test_: {screen: Test},
    // MyApp: {screen: screen_parent}

}, {
    headerMode: 'none'
});

class AppWithNavigationState extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
            // console.log("-->", this.props.redAuth)
        BackHandler.addEventListener('hardwareBackPress', function () {
            const {dispatch, navigation, nav} = this.props;

            if (nav.routes.length === 1) {
                // console.log("-->", this.props.nav)
                BackHandler.exitApp()
                return false;
            }
            dispatch({type: 'Navigation/BACK'});
            return true;
        }.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (            
            <AppNavigator navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav,addListener})}/>
            
        )
    }
};

function mapStateToProps(state) {
    return {
        nav: state.nav,
        redAuth:state.redAuth
    };
}


export default connect(mapStateToProps)(AppWithNavigationState);