import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Item from '../Item/index'


export default class ItemList extends Component {
  render() {
      return (
        <View>
            <Item name='teste1'/>
            <Item name='teste2'/>
            <Item name='teste3'/>
        </View>
        
      )
  }
}


