import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Produto = ({imagem, titulo}) => {
  return (
    <View style={styles.containerProduto}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerProduto: {
    height: 168,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#848486',
  },
  imagem: {
    height: 84,
  },
});
