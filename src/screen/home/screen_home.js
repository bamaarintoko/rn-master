/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View, Dimensions, Image, Platform, StatusBar
} from 'react-native';
import { connect } from "react-redux";
import { ListView, TouchableWithoutFeedback } from 'react-native';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Head from '../../Components/Head'
// import Statusbar from "../../Components/Statusbar";
import Icon from 'react-native-vector-icons/FontAwesome';
// import PTRView from 'react-native-pull-to-refresh';
import axios from 'axios'
// import FCM, { FCMEvent } from 'react-native-fcm'
import Api from "../../utils/Api";


class screen_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            int: 0,
            info: [],
            letsTry: false,
            //--------------------------
            warehouse_id: 0,
            incoming: 0,
            outgoing: 0,
            w_cost_update_date: '',
            w_cost_per_day: 0,
            last_update: ''
        }

    }
    componentDidMount() {


    }
    componentDidUpdate(prevProps, prevState) {



    }

    render() {
        //console.log("--->", this.props.redAuth)
        return (
            <Container>
                <Head
                    leftPress={() => this.props.navigation.navigate('DrawerOpen')}
                    rightPress={() => this.props.navigation.navigate('Setting')}
                />
                <Content>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
        redUpdateWarehouseIn: state.redUpdateWarehouseIn,
        redUpdateWarehouseOut: state.redUpdateWarehouseOut
    };
}

export default connect(mapStateToProps)(screen_home)
