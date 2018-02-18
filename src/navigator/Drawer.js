import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from "react-native-simple-store";
import {StyleSheet, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";
import {Container, Content, List, Text, Thumbnail} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
// import RNRestart from 'react-native-restart';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        backgroundColor: '#FFFFFF',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        backgroundColor: '#29363d'
    },
    textColor: {
        color: '#FFFFFF',
        fontSize: 15
    },

    icn: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 15
    },
    txt: {
        justifyContent: 'center',
        paddingLeft: 10,
        flex: 10
    },
    vw: {
        height: 50,
        flexDirection: 'row',
        flex: 1
    }
});

class Drawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            warehouse_code: '',
            warehouse_name: '',
            letsTry: true
        }
        this.onLogOut = this.onLogOut.bind(this)
    }

    onBack(key) {
        // setTimeout(() => {
        //     this.props.navigation.navigate(key);
        // }, 300);
        this.props.navigation.navigate('DrawerClose')
    }

    onLogOut() {
        // store.delete('AUTH')
        // this.props.navigation.dispatch({type: 'LOG_OUT_SUCCESS'})
        // RNRestart.Restart()
        // //this.props.dispatch({ type: 'LOGIN_ERROR_REFRESH' })
        this.props.navigation.navigate('DrawerClose')

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Thumbnail large
                               source={{uri: 'https://s3-us-west-2.amazonaws.com/scorestream-user-profile-pictures/userProfile_1012050_117122-4447-1ropiq4.png'}}/>
                    <Text>{this.state.warehouse_name}</Text>
                    <Text style={{fontWeight: 'bold'}}>Haloo</Text>
                </View>
                <Container style={{backgroundColor: '#29363d'}}>
                    <Content>
                        <List>
                            <TouchableHighlight underlayColor="#607D8B" onPress={() => {
                                this.onBack('OutGoingItems');
                            }}>
                                <View style={styles.vw}>
                                    <View style={styles.icn}>
                                        <Icon size={18} color={'#FFFFFF'} name={'arrow-circle-right'}/>
                                    </View>
                                    <View style={styles.txt}>
                                        <Text style={styles.textColor}>Menu </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#607D8B" onPress={() => {
                                this.onBack('InComingItems');
                            }}>
                                <View style={styles.vw}>
                                    <View style={styles.icn}>
                                        <Icon size={18} color={'#FFFFFF'} name={'arrow-circle-left'}/>
                                    </View>
                                    <View style={styles.txt}>
                                        <Text style={styles.textColor}>Menu </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#607D8B" onPress={() => {
                                this.onBack('MyApp');
                            }}>
                                <View style={styles.vw}>
                                    <View style={styles.icn}>
                                        <Icon size={18} color={'#FFFFFF'} name={'file-text-o'}/>
                                    </View>
                                    <View style={styles.txt}>
                                        <Text style={styles.textColor}>Menu</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#607D8B" onPress={() => {
                                this.onBack('InComingItems');
                            }}>
                                <View style={styles.vw}>
                                    <View style={styles.icn}>
                                        <Icon size={18} color={'#FFFFFF'} name={'credit-card'}/>
                                    </View>
                                    <View style={styles.txt}>
                                        <Text style={styles.textColor}>Menu</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor="#607D8B" onPress={() => {
                                this.onBack('Setting');
                            }}>
                                <View style={styles.vw}>
                                    <View style={styles.icn}>
                                        <Icon size={18} color={'#FFFFFF'} name={'cogs'}/>
                                    </View>
                                    <View style={styles.txt}>
                                        <Text style={styles.textColor}>Menu</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#607D8B" onPress={() => {
                                this.onLogOut()
                            }}>
                                <View style={styles.vw}>
                                    <View style={styles.icn}>
                                        <Icon size={18} color={'#FFFFFF'} name={'sign-out'}/>
                                    </View>
                                    <View style={styles.txt}>
                                        <Text style={styles.textColor}>Menu </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>

                        </List>
                    </Content>
                </Container>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth
    };
}

export default connect(
    mapStateToProps,
)(Drawer);
