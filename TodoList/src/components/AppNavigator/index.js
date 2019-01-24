import React from 'React' 
import { createAppContainer, createStackNavigator} from 'react-navigation'
import {HomeScreen, AddScreen}  from '../../screens'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Add: AddScreen
  },
  {
    initialRouteName: "Home"
  }
  );
  
  export default createAppContainer(AppNavigator);