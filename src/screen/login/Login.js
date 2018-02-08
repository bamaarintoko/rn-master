import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, AsyncStorage, Image, StatusBar } from "react-native";
import { Button, Input, Item, Text } from "native-base";
import { Field, reduxForm } from "redux-form";
import { actLogin } from './action'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import md5 from 'crypto-js/md5';

const required = value => (value ? undefined : true)
const renderInputEmail = ({
                              input: { onChange, ...restInput },
    meta: { touched, error, warning }
                          }) =>
    (<Item error={!!(touched && error)} rounded style={{ marginBottom: 10, backgroundColor: '#FFFFFF' }}>
        <Input error onChangeText={onChange} {...restInput} placeholder='email' />
        {
            touched &&
            ((error && <Icon size={20} color={'red'} style={{ paddingRight: 10 }} name={'warning'} />))}
    </Item>)


const renderInputPassword = ({
                                 input: { onChange, ...restInput },
    meta: { touched, error, warning }
                             }) => (
        <Item error={!!(touched && error)} rounded style={{ marginBottom: 10, backgroundColor: '#FFFFFF' }}>
            <Input secureTextEntry={true} onChangeText={onChange} {...restInput} placeholder='password' />
            {
                touched &&
                ((error && <Icon size={20} color={'red'} style={{ paddingRight: 10 }} name={'warning'} />))}
        </Item>
    )


class Login extends Component {
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this)
        this.state = {
            loginFailed: true,
            loginSuccess: false,
            message: '',
            isLoading: false
        }
    }

    componentDidMount() {
        if (this.props.redLogError.status_error) {
            this.setState({
                isLoading: false
            })
        }
        console.log('render', this.state.isLoading);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("cdu_err", this.state.isLoading)
        if (this.props.redLogError.status === prevState.loginFailed) {
            //console.log(prevState)
            if (this.props.redLogError.status_error) {
                this.setState({
                    //loginFailed: true,
                    isLoading: false,
                    //loginFailed:true,
                    message: this.props.redLogError.message
                })
                // RNRestart.Restart();
            }

            console.log("------>error", this.props.redLogError)
            this.props.dispatch({ type: 'LOGIN_ERROR_REFRESH' })
        }

    }

    doLogin(values) {
        this.setState({
            isLoading: false,
            //loginFailed: false,
            message: ''
        })
        this.setState({
            isLoading: true,
            //loginFailed: false,
            message: ''
        })
        this.props.dispatch(actLogin(values))
        //console.log(this.state.isLoading)
    }

    render() {
        let isLoading = this.state.isLoading
        // console.log("RNRestart.Restart();", isLoading)
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2c3e50"
                    barStyle="light-content"
                />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Image
                        style={{ height: 100, width: 100, marginBottom: 50 }}
                        source={require('../../utils/assetss/logo.png')}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {
                        !isLoading
                            ?
                            <View>

                                <Field style={{ flex: 1 }} validate={[required]} name="email" component={renderInputEmail} />
                                <Field validate={[required]} name="password" component={renderInputPassword} />
                                {
                                    this.state.loginFailed &&
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{ color: '#DD2C00' }}>{this.state.message}</Text>
                                    </View>
                                }
                                <Button style={styles.fullWidthButton} full rounded info onPress={this.props.handleSubmit(this.doLogin)}>
                                    <Text>Login</Text>
                                </Button>
                            </View>
                            :
                            <View style={styles.modalContent}>
                                <Spinner type={'Circle'} color={"#000000"} />

                            </View>
                    }

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#29363d',
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
    modalContent: {
        //backgroundColor: 'white',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    fullWidthButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});


function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
        redLogError: state.redLogError
    };
}
FormLogin = connect(mapStateToProps)(Login)
export default reduxForm({
    form: 'FormLogin'
})(FormLogin);
