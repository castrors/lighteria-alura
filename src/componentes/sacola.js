import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';
import {DataContext} from '../provider';
import {FONT_FAMILY_SEMI_BOLD, RED, WHITE} from '../styles/styles';

export const Sacola = () => {
  const navigation = useNavigation();
  const {itensCheckout} = useContext(DataContext);
  return (
    <TouchableOpacity
      style={styles.containerBag}
      onPress={() => navigation.push('Checkout')}>
      <Image
        source={require('../assets/images/icone-sacola.png')}
        style={styles.image}
      />
      {itensCheckout.length > 0 && (
        <View style={styles.containerQuantidade}>
          <Text style={styles.textoQuantidade}>
            {itensCheckout.reduce(
              (acumulado, atual) => acumulado + atual.quantidade,
              0,
            )}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  containerBag: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },
  containerQuantidade: {
    backgroundColor: RED,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
});
