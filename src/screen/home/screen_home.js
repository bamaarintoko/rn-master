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
                <StatusBar
                    backgroundColor="#212121"
                    barStyle="light-content"
                />
                <Header androidStatusBarColor="#2c3e50" style={{ backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#BEBEBE' }}>
                    <Left style={{ flex: 1 }}>
                        <Button full transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <Icon size={20} name="bars" color="#29363d" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image
                            source={require('../../utils/assetss/persada_food.png')}
                        /> */}
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button full transparent onPress={() => this.props.navigation.navigate('Setting')}>
                            <Icon size={20} name="cog" color="#29363d" />
                        </Button>
                    </Right>
                </Header>
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
