import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

export default class App extends Component{
    render() {
        return(
            //<View style={styles.main}>
            <View style={{flex: 1, flexDirection:'column'}}>
                <View ref='first' style={[styles.first, styles.common]}>
                    <View style={styles.subView} />
                    <View style={styles.subView} />
                    <View style={styles.subView} />
                </View>

                <View ref='second' style={[styles.second, styles.common]}>
                <View style={styles.subView}/>
                <View style={styles.subView}/>
                <View style={styles.subView}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column'
    },
    first: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-around'
        //justifyContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center'
        /*margin: 40,
        borderColor: 'red',
        borderWidth: 1*/
    },
    second: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
        /*margin: 40,
        borderColor: 'blue',
        borderWidth: 1*/
    },
    common: {
        margin: 40,
        borderColor: 'red',
        borderWidth: 1
    },
    subView: {
        height: 50,
        width: 50,
        backgroundColor: 'green'
    }
});