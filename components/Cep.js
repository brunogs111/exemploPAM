import React from 'react';
import { StyleSheet, Text, View}
from 'react-native';

export default function Cep() {
  return (
      <>
          <Text style={StyleSheet.texto}>Cidade: </Text>
          <Text style={StyleSheet.texto}>Estado: </Text>
          <Text style={StyleSheet.texto}>Logradouro: </Text>
          <Text style={StyleSheet.texto}>Complemento: </Text>
      </>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize:15,
    marginTop:10,
  }
});