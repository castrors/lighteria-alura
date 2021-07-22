import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.containerBag}>
          <Image
            source={require('../../../../assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
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
    fontSize: 28,
  },
  image: {
    height: 30,
    width: 30,
  },
  containerBag: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 30,
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
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA',
  },
});

export default Cabecalho;
