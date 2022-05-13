import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Cep from './components/Cep';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
      <Text style={styles.txt}>Digite seu CEP: </Text>

      <TextInput
        placeholder='ex: 17140000'
        keyboardType='numeric'
        style={styles.input}
        />
        
      <TouchableOpacity
      style={styles.botao}
      >
        <Text style={styles.txtBotao}> Buscar </Text>
      </TouchableOpacity>

      <Cep />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    alignItens: 'center',
  },
  texto:{
    fontSize: 20,
  },
  input:{
    width: '80%',
    marginLeft:'5%',
    borderBottomWidth: 2,
    marginTop: 20,
    fontSize: 30
  },
  botao:{
    width:'80%',
    marginTop: 30
  },
  txtBotao:{
    fontSize:20,
    textAlign: 'center'
  },
  txt:{
     fontSize: 20,
     textAlign: 'center'
  }
});
