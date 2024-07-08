import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const CameraScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
        <View style={styles.cameraButtonContainer}>
          <IconButton
            icon={() => (
              <MaterialCommunityIcons name="fullscreen" size={24} color="#6A1B9A" />
            )}
            size={40}
            onPress={() => console.log('Full screen pressed')}
          />
          <IconButton
            icon={() => (
              <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#6A1B9A" />
            )}
            size={40}
            onPress={() => console.log('Stop pressed')}
          />
        </View>
      </RNCamera>
      <View style={styles.translationContainer}>
        <Text style={styles.translationText}>
          Translation of the sign language will appear here.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  camera: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  translationContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  translationText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default CameraScreen;
 