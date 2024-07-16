import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'black',
  },
  camera: {
    flex: 3, // Reduced flex value for the camera
    height: 200,
    width: 300,
    marginLeft: 50,
    marginTop: 20,
    
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderColor: '#545454', // or any color you prefer
    borderWidth: 5, // define the width of the border
    borderRadius: 10,
  },
  textArea: {
    height: 100,
    width: 400,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor:'white',
    borderRadius:10,
    marginLeft:10,
  },
  textContainer: {
    flex: 1, // Added flex value for the text area
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor:"#545454", // define the radius of the border's corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1:{
    paddingLeft:100,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor:"#545454", // define the radius of the border's corners
    justifyContent: 'center',
    alignItems: 'center',
  }
});
