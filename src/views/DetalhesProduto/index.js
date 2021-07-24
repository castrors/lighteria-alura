import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Background} from './componentes/Background';
import {DescricaoItem} from './componentes/DescricaoItem';

export const DetalhesProduto = ({route}) => {
  const {imagem, titulo, estudio, itemDesc, itemName, preco, id} = route.params;
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        imagem={imagem}
        titulo={titulo}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        preco={preco}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
