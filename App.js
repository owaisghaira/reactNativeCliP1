import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Navegate from './src/config/navegation'
const App = () => {
  return (
   <Navegate/>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;