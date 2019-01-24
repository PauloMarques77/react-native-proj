import React, {Component} from 'react';
import {View, TextInput, Text, SafeAreaView, StyleSheet } from 'react-native';
import styles from '../../constants/styles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {text: 'initial value'}
    }
    render() {
        return(
            <SafeAreaView style={styles.container}>           
                    <Text style={styles.welcome}>Welcome to AddScreen!</Text>
                    <View >
                <TextInput style = {teste.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}/>
                
                <TextInput style = {teste.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}/>
                </View>

            </SafeAreaView>
        )
    }
}

const teste = StyleSheet.create({
container: {
 paddingTop: 23
},
input: {
 margin: 15,
 height: 40,
 borderColor: '#7a42f4',
 borderWidth: 1
},
submitButton: {
 backgroundColor: '#7a42f4',
 padding: 10,
 margin: 15,
 height: 40,
},
submitButtonText:{
 color: 'white'
}
})
