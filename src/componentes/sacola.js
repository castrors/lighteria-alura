import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {WHITE} from '../styles/styles';

export const Sacola = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerBag}
      onPress={() => navigation.push('Checkout')}>
      <Image
        source={require('../assets/images/icone-sacola.png')}
        style={styles.image}
      />
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
});
