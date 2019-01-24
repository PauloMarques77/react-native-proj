import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from '../../constants/styles';

export default class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView>                
            {/* <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}></Text>
            </View> */}
            </SafeAreaView>
        )
    }
}