import {DrawerNavigator} from "react-navigation";
// import screenHome from '../screen/home/screen_home'
// import {Setting, ChangePassword, EditWarehouse} from '../screen/setting'
// import {InComingItems, Test, OutGoingItems, DetailOutGoingItems, DetailIncomingItems} from '../screen/warehouse'
import AppDrawerContent from "./Components/AppDrawerContent";
import React from "react";
const AppDrawer = DrawerNavigator({
        Home: {screen: screenHome},
        Setting: {screen: Setting},
        InComingItems: {screen: InComingItems}
    },
    {
        contentComponent:props=> {
            return <AppDrawerContent {...props}/>
        },
        contentOptions:{
            iconContainerStyle : {
                marginRight: 0
            }
        }
    });

export default AppDrawer