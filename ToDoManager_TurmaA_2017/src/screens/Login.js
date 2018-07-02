
import React, { Component } from 'react';
import {
    KeyboardAvoidingView, View,
    Image, TextInput, Button, Text, SafeAreaView, Alert, ScrollView
} from 'react-native';

import styles from '../styles/styles-login';

const img = require('../assets/TodoList.png');

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: props.email,
            password: ''
        };
    }

    // onTextChanged(text) {
    // this.setState({ email: text });
    // }

    render() {
        return (
            <ScrollView>
            <KeyboardAvoidingView style={styles.container}
                behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img} />
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input}
                        placeholder='Email'
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email} />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true} 
                        onChangeText={(password) => this.setState({ password })}/>
                    <Button title='Sign In'
                        onPress={async () => await this.signInAsync()} />
                    <View style={styles.textConteiner}>
                        <Text>Not a member? Let's </Text>
                        <Text style={styles.textRegister}
                            onPress={() => this.props.navigation.navigate('pageRegister')}>
                            Register.
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }

    async signInAsync() {
        try{
            const user = await signInOnFirebaseAsync(
                this.state.email,
                this.state.password
            );

            const message = `User ${user.email} authenticated`;
            Alert.alert('User Authenticated', message);
        }catch (error){
            Alert.alert('Login failed', error.message);
        }
    }
};

import { signInOnFirebaseAsync } from '../services/FirebaseApi';