import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_SEMIBOLD,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  LIGHTBLUE,
  WHITE,
} from '../styles/styles';

const Botao = ({onPress, titulo}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {backgroundColor: LIGHTBLUE, padding: 20, borderRadius: 6},
  botaoTexto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});

export default Botao;
