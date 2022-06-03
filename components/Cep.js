import React from 'react';
import { StyleSheet, Text, View}
from 'react-native';

export default function Cep(props) {
  return (
      <>
          <Text style={StyleSheet.texto}>Cidade: {props.data.localidade}</Text>
          <Text style={StyleSheet.texto}>Bairro: {props.data.bairro}</Text>
          <Text style={StyleSheet.texto}>Estado: {props.data.uf}</Text>
          <Text style={StyleSheet.texto}>Logradouro: {props.data.logradouro}</Text>
          <Text style={StyleSheet.texto}>Complemento: {props.data.complemento}</Text>
      </>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize:15,
    marginTop:10,
  }
});