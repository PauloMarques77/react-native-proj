import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
import styles from '../../constants/styles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>           
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}></Text>
                    <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.props.navigation.navigate('Add')}>
                        <Icon name="md-create" style={teste.actionButtonIcon} />
                    </ActionButton.Item>
                    </ActionButton>
            </SafeAreaView>
        )
    }
}

const teste = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});