import 'react-native-gesture-handler';

import { Button, Text,View ,ToastAndroid ,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Pagina1Screen } from './Pagina1Screen';

interface RouteParams
{
  
}
interface Props extends StackScreenProps<any,any>{
  wvalor : number;
}

let  rand = 0; 

export const Pagina2Screen = ({route,navigation}:Props) => {
  //const[numero , setNumero] =useState('99')
  
  const [name, setName] = useState('shaun');
  const [textq, setValue] = useState('')
  const [resultado, setResultado] = useState('INICIO')
  const [intentos, setintentos] = useState(0);
  const[nadivinar, numeroadivinar] = useState(50);
  const[bandera, nbandera] = useState(0);
  const [fruits, setFruits] = useState([' ']);
  
  const [newvalue2, setValue2] = useState('0');

  const calcular2 = () =>{
    ToastAndroid.show("Numero escrito "+newvalue2, ToastAndroid.SHORT);
   rand = Math.round((Math.random() * (+newvalue2-1))+1);
    ToastAndroid.show("Numero random es "+rand, ToastAndroid.SHORT);
  }

  const calcular = () =>{
    if (rand >1000)
    {
    ToastAndroid.show("Numero random es "+rand, ToastAndroid.SHORT);
    ToastAndroid.show("Numero escrito es "+textq, ToastAndroid.SHORT);
    
    if(+textq  == rand)
    {
      setintentos (intentos + 1)
      setResultado ('GANO')
       
      
     }else{
      if(+textq  <= rand)
      {
        setintentos (intentos + 1)
        setResultado ('El numero es menor que ')
        setFruits(currentFruits => currentFruits.concat(textq,','))
      }
      else{
        if(+textq  >= rand)
      {
        setintentos (intentos + 1)
        setResultado ('El numero es mayo que ')
        setFruits(currentFruits => currentFruits.concat(textq,','))
      }
      }
     }


    }else
    {
      ToastAndroid.show("Numero random invalido ingresar < 1000 "+newvalue2, ToastAndroid.SHORT);
    }
  }


  return (
    
    <View style={ styles.globalMargin }>
     <Text style={styles.title}>
       {
    //   JSON.stringify(params,null,3)
        }
       </Text>
       <Text>
        Ingrese el valor del rango
       </Text>
       <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 99'
      onChangeText={(newvalue2) => setValue2(newvalue2)}

      />
      <Button
     title="Random"
     onPress={() => calcular2()} 
     />
       
       <Text>
        Ingresar numero
       </Text>
     
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 99'
      onChangeText={(newvalue) => setValue(newvalue)}

      />
     <Button
     title="JUGAR "
     onPress={() => calcular()} 
     />
       <Text>
        {resultado}
       </Text>
       <Text>
         Cantidad de intentos :
        {intentos}
       </Text>
       <Text>
         Historial :
       {'\n'  }
       </Text>

     
       <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >                    
             <Text style={styles.paragraph}>
                 {fruits}
              </Text>
              
       </ScrollView>
        
       
         </View>
               
  )
  
}

