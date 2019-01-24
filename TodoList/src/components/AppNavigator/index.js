import React from 'React' 
import { createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from '../../screens'

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    }
  });
  
  export default createAppContainer(AppNavigator);