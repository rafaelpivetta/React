import React, { Component } from 'react';
//1. import Login from './Login';
import {
    KeyboardAvoidingView, View, Image, Text, TextInput, Button
} from 'react-native';

import styles from '../styles/styles-register'

const img = require('../assets/TodoList.png');

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    //1. render() {
    //1.     return <Login email = 'myemail@email.com' />
    //1. }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img} />
                    <Text style={styles.title}>Registering new user</Text>
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input} placeholder='Email'
                        keyboardType={'email-address'} autoCapitalize='none' onChangeText={(text) =>
                            this.setState({ email: text })} />
                    <TextInput style={styles.input} placeholder='Password'
                        secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                    <Button title='Register User' onPress={() =>
                        alert('Email: '+this.state.email +' Password: '+this.state.password)} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}