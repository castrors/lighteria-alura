import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Sacola } from '../../../../componentes/sacola';
import {
  COR_DE_FUNDO,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_XX_LARGE,
  WHITE,
} from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <Sacola />
      </View>

      <View>
        <View style={styles.separator} />
        <View style={styles.containerTextDescription}>
          <Text style={styles.textDescription}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: FONT_SIZE_XX_LARGE,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  containerTextDescription: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textDescription: {
    padding: 24,
    backgroundColor: COR_DE_FUNDO,
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
    color: '#A1A5AA',
  },
});

export default Cabecalho;
