import React from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.containerBag}>
          <Image
            source={require('./assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f0f4',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
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
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
});

export default App;
