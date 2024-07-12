// import * as React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { IconButton } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const { width, height } = Dimensions.get('window');

// const CameraScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <RNCamera
//         style={styles.camera}
//         type={RNCamera.Constants.Type.back}
//         captureAudio={false}
//       >
//         <View style={styles.cameraButtonContainer}>
//           <IconButton
//             icon={() => (
//               <MaterialCommunityIcons name="fullscreen" size={24} color="#6A1B9A" />
//             )}
//             size={40}
//             onPress={() => console.log('Full screen pressed')}
//           />
//           <IconButton
//             icon={() => (
//               <MaterialCommunityIcons name="stop-circle-outline" size={24} color="#6A1B9A" />
//             )}
//             size={40}
//             onPress={() => console.log('Stop pressed')}
//           />
//         </View>
//       </RNCamera>
//       <View style={styles.translationContainer}>
//         <Text style={styles.translationText}>
//           Translation of the sign language will appear here.
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   camera: {
//     flex: 2,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   cameraButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 10,
//   },
//   translationContainer: {
//     flex: 1,
//     backgroundColor: '#E0E0E0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   translationText: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
// });

// export default CameraScreen;


// import React, { useRef, useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';
// import { CameraType } from 'expo-camera/build/legacy/Camera.types';

// const CameraScreen = () => {
//   const [type,setttype]=useState(CameraType.back)
//   const cameraRef = useRef(null);
//   const [isRecording, setIsRecording] = useState(false);

//   const startRecording = async () => {
//     if (cameraRef.current) {
//       try {
//         const { uri } = await cameraRef.current.recordAsync();
//         console.log('Recorded video URI:', uri);
//         // Handle the recorded video URI here (save it, upload it, etc.)
//       } catch (error) {
//         console.error('Failed to start recording', error);
//       }
//     }
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     if (cameraRef.current) {
//       cameraRef.current.stopRecording();
//       setIsRecording(false);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Camera
//         ref={cameraRef}
//         style={{ flex: 1 }}
//         type={type} // Ensure Camera.Constants.Type is used correctly
//       >
//         <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
//           {isRecording ? (
//             <TouchableOpacity onPress={stopRecording} style={{ padding: 20 }}>
//               <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Stop Recording</Text>
//             </TouchableOpacity>
//           ) : (
//             <TouchableOpacity onPress={startRecording} style={{ padding: 20 }}>
//               <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Start Recording</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </Camera>
//     </View>
//   );
// };

//  
import React, { useEffect, useState, useRef } from 'react';
import { Alert, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Camera} from 'expo-camera';
// import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import Feather from '@expo/vector-icons/Feather';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';

const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState("off");
  const [pictureUri, setPictureUri] = useState("");
  const cameraRef = useRef();

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    await Camera.requestCameraPermissionsAsync();
    await Camera.requestMicrophonePermissionsAsync();
  };

  const getPermissions = async () => {
    const cameraPermission = await Camera.getCameraPermissionsAsync();
    const microphonePermission = await Camera.getMicrophonePermissionsAsync();

    return cameraPermission.granted && microphonePermission.granted;
  };

  const switchFlashMode = () =>
    setFlashMode(flashMode === "off" ? "on" : "off");

  const switchType = () =>
    setType(type === CameraType.back ? CameraType.front : CameraType.back);

  const takePicture = async () => {
    const { uri, width, height } = await cameraRef?.current?.takePictureAsync();
    setPictureUri(uri);
  };

  if (!getPermissions()) {
    return (
      <View style={styles.container}>
        <Alert
          title="Permissions Required!"
          message="You need to provide the permissions to access the camera"
          buttons={[{ text: "Got it" }]}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        flashMode={flashMode}
      >
        <View style={styles.controlsContainer}>
          <Feather name="refresh-ccw" size={30} onPress={switchType} />
          <TouchableOpacity
            style={styles.takePictureButton}
            onPress={takePicture}
          />
          <Feather
            name={flashMode === "off" ? "zap-off" : "zap"}
            size={30}
            onPress={switchFlashMode}
          />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  controlsContainer: {
    alignItems: "center",
    backgroundColor: "lightblue",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    right: 0,
  },
  takePictureButton: {
    backgroundColor: "#fff",
    borderRadius: 35,
    height: 70,
    marginVertical: 10,
    width: 70,
  },
});

export default CameraScreen;
