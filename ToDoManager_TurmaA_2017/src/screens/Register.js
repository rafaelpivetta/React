import React, { Component } from 'react';
//1. import Login from './Login';
import {
    KeyboardAvoidingView, View, Image, Text, TextInput, Button, Alert
} from 'react-native';

import { createUserOnFirebaseAsync } from '../services/FirebaseApi';
import { NavigationActions } from 'react-navigation';

import styles from '../styles/styles-register';

const img = require('../assets/TodoList.png');

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register'
    }

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
                    <Button title='Register User'
                            onPress={async () => await this.createUserAsync()} />
                </View>
            </KeyboardAvoidingView>
        );
    }

    async createUserAsync() {
        try {
            const user = await createUserOnFirebaseAsync(
                this.state.email, 
                this.state.password
            );
            const message = `User ${user.email} has been created!`;
            Alert.alert('User Created', message, [{
                text: 'Ok', onPress: () => {
                    const backAction = NavigationActions.back();
                    this.props.navigation.dispatch(backAction);
                }
            }]);

            //Implementar funcionalidade para voltar para a tela anterior
        }catch (error){
            Alert.alert('Create User Failed', error.message);
        }
    }

}