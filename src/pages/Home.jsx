import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/image/HomePageBg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton
            icon="cog"
            size={24}
            style={styles.settingsButton}
            onPress={() => console.log('Settings pressed')}
          />
        </View>
        <Text style={styles.title}>Choose Your Role Below</Text>
        <Button
          mode="outlined"
          icon="accessibility"
          style={styles.button}
          onPress={() => navigation.navigate('CameraScreen')}
        >
          Sign To Text
        </Button>
        <Button
          mode="outlined"
          icon="record-voice-over"
          style={styles.button}
          onPress={() => console.log('Sign To Voice pressed')}
        >
          Sign To Voice
        </Button>
        <Button
          mode="outlined"
          icon="text-fields"
          style={styles.button}
          onPress={() => console.log('Text To Sign pressed')}
        >
          Text To Sign
        </Button>
        <Button
          mode="outlined"
          icon="school"
          style={styles.button}
          onPress={() => navigation.navigate('LearnSignLanguage')}
        >
          Learn Sign Language
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  settingsButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#6A1B9A',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    marginBottom: 20,
  },
});

export default Home;
