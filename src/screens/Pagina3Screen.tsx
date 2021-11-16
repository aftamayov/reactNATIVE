import 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = () => {
  return (
    <View style={ styles.globalMargin }>
     <Text style={styles.title}>Pagina3Screen</Text>
   </View>
  )
}
