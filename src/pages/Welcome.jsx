import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/image/HomeScreenBg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to Sign Translator</Text>
        <Text style={styles.subText}>
          Effortlessly translate between sign language and text or speech.
        </Text>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          Get Started
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    borderRadius: 25,
  },
});

export default Welcome;

