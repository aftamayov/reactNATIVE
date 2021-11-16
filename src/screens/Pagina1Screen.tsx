import 'react-native-gesture-handler';

import { Button,Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Pagina2Screen } from './Pagina2Screen';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';





interface Props extends StackScreenProps<any,any>{
  
}

export const Pagina1Screen = ({navigation}:Props) => {
  


  

  


  const [textq, setValue] = useState('')


  return (
    
   <View style={ styles.globalMargin}>
    
    
    <Text > 
    
     <Icon name="logo-reddit" size={150} color="#900" />;
      
     </Text>
     
     <Button
     title="Jugar"
     onPress={() => navigation.navigate('Pagina2Screen')}
    
     
     />

     <Text>
     
     <Icon
     
      name="globe-outline"  
      size={150} 
      color="#900"
       
      />;
     </Text>
     
      <Button
     title="Paises"
     onPress={() => navigation.navigate('Pagina3Screen')}
     />

    
   </View>
   
  )
  
}
