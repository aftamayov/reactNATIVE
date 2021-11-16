import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer independent={true}>
    <StackNavigator />
    </NavigationContainer >
  )
}
export default App;