/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet, TextInput,
    View
} from 'react-native';
import {connect} from "react-redux";
import {Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Picker, Text} from "native-base";
import axios from 'axios'
import {Field, reduxForm} from "redux-form";

const inputProjectName = ({input: {onChange, ...restInput}}) => {
    return <Input style={{backgroundColor:'#fff', fontSize:14, height:40}} placeholder='project name' onChangeText={onChange} {...restInput} />
}
const inputProjectDesc = ({input: {onChange, ...restInput}}) => {
    return <Input multiline={true}
                  numberOfLines={4}
                  placeholder='project desc' onChangeText={onChange} {...restInput} />
}
class screen_add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            cat:[]
        };

    }

    submit = (values) => {
        //dispatch(actDoLogin(values))
        console.log('submitting form', values)
        console.log('submitting form-->',this.state.selected2)
        const config = {
            headers: {'content-type': 'multipart/form-data'}
        };
        const data = new FormData();
        data.append('act', 'insert_pro');
        data.append('cat_id', this.state.selected2);
        data.append('project_name', values.project_name);
        data.append('project_desc', values.project_desc);
        axios.post("https://jnck.mlskoding.com/api/project", data, config)
            .then(function (response) {
                    console.log(response)
                if (response.data.status === true) {
                    // this.setState({
                    //     cat: response.data.data
                    // })
                }
                //console.log(response.data)
                // this.setState({
                //     data:response.data
                // })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    componentWillMount() {
        const config = {
            headers: {'content-type': 'multipart/form-data'}
        };
        const data = new FormData();
        data.append('act', 'list_cat');
        axios.post("https://jnck.mlskoding.com/api/insert_cat", data, config)
            .then(function (response) {
                if (response.data.status === true) {
                    //console.log(response.data.data)
                    this.setState({
                        cat: response.data.data
                    })
                }
                //console.log(response.data)
                // this.setState({
                //     data:response.data
                // })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.selected2)
        const {handleSubmit, onClick} = this.props
        return (
            <Container style={{backgroundColor: '#212121'}}>
                <Header style={{backgroundColor: '#03A9F4'}}/>

                <Content>

                    <View style={{margin:5}}>
                    <Item regular style={{backgroundColor:'#fff'}}>
                        <Field name="project_name" component={inputProjectName}/>

                    </Item>
                    </View>
                    <View style={{margin:5}}>
                        <Picker
                            style={{backgroundColor:'#fff', height:40}}
                            mode="dropdown"
                            placeholder="Select One"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Item label="-- pilih kategori --" value={null} />
                            {
                                this.state.cat.map((x,i)=>{
                                    return (
                                    <Item key={i} label={x.cat_name} value={x.cat_id} />
                                )
                                })
                            }

                        </Picker>
                    </View>
                    <View style={{margin:5}}>
                        <Item regular style={{backgroundColor:'#fff'}}>
                            <Field name="project_desc" component={inputProjectDesc}/>
                        </Item>
                    </View>


                </Content>
                <Footer style={{backgroundColor: '#212121', margin:5}}>
                    <FooterTab style={{backgroundColor: '#212121'}}>
                        <Button full bordered info onPress={handleSubmit(this.submit)}>
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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

add = connect()(screen_add);
export default reduxForm({
    form:'add_project'
})(add)
