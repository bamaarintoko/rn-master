import React from 'react';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
const Head = ({ leftPress, bodyPress, rightPress }) => {
    return (
        <Header androidStatusBarColor="#03A9F4" style={{ backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#BEBEBE' }}>
            <Left style={{ flex: 1 }}>
                <Button full transparent onPress={leftPress}>
                    <Icon size={20} name="bars" color="#29363d" />
                </Button>
            </Left>
            <Body style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
            </Body>
            <Right style={{ flex: 1 }}>
                <Button full transparent onPress={rightPress}>
                    <Icon size={20} name="cog" color="#29363d" />
                </Button>
            </Right>
        </Header>
    );
};

export default Head;