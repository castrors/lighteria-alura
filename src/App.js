import React from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import ListaProdutos from './views/ListaProdutos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontFamily: 'OpenSans-ExtraBold',
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
  containerDescription: {
    paddingHorizontal: 24,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  containerTextDescription: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textDescription: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA',
  },
});

export default App;
