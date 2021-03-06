import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

export const StackNavigator  = () =>{
  return (
    
    <Stack.Navigator
    screenOptions =  {{
      headerStyle:{
        elevation: 0
      },
      cardStyle:{
        backgroundColor: 'white'
      }
    }}>
      
      <Stack.Screen name="Pagina1Screen" options={{title:"Pagina principal"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Juego"}}component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Lista Paises"}}component={Pagina3Screen} />
    </Stack.Navigator>
  );
}