import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
    }
  }

  return (
    <ImageBackground source={require('../../assets/image/welcom.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text1}>Sign language translator</Text>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        </CameraView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={10}
            placeholder="Type here..."
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
    padding: 20,
  },
  camera: {
    flex: 3,
    width: '100%',
    aspectRatio: 3 / 4,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  textArea: {
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#545454',
    padding: 10,
    borderRadius: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#545454',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
});