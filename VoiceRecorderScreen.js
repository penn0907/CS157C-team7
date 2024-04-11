import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import {
  /* Inside expo-av/src/Audio.types.ts: */
  InterruptionModeAndroid,
  InterruptionModeIOS,
} from "expo-av";
import axios from 'axios';

export default function VoiceRecorder() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [recording, setRecording] = useState(null);
  const [captions, setCaptions] = useState(""); // State to hold live captions

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
      
      // Initialize speech-to-text here, if required by your chosen solution
    })();
  }, []);

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera or microphone</Text>;
  }

  
  async function startRecording() {
    try {
      // Correctly set the audio mode for iOS recording
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        InterruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS, // Correct value
        playsInSilentModeIOS: true,
        InterruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      });
  
      // Start recording
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  }

  async function stopRecording() {
    if (!recording) return;
  
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); // Make sure this URI is accessible and correct
    console.log("Recording stopped and stored at", uri);
    setRecording(null); // Reset recording state
    // Call your speech-to-text function here
    
    const formData = new FormData();
    formData.append('beam_size', '5');
    formData.append('best_of', '8');
    // Append the file. You may need to adjust the name and type based on your API requirements
    formData.append('file', {uri: uri, name: 'recording.m4a', type: 'audio/m4a'});
    var process_id;
    try {
      const response = await axios.post('https://api.monsterapi.ai/v1/generate/whisper', formData, {
        headers: { 
          accept: 'application/json',
          authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjE1Mzg1YzI3YTNmNjlkMWIzYzU5MTcxNTAzZWE4NTMwIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDItMTdUMjA6NDY6MTQuODA1NDQxIn0.Mzp0z0y5wLS8uTdiYVkOSWuaojMic6Isee0sG3HyFMc',
          'Content-Type': 'multipart/form-data', // This header is usually not necessary as Axios and native fetch automatically handle multipart forms
        },
      });
      console.log(response.data);
      process_id=response.data.process_id;
    } catch (error) {
      console.error(error);
    }
    const checkStatus = (process_id) => {
      const interval = setInterval(() => {
        const url = `https://api.monsterapi.ai/v1/status/${process_id}`;
        const options = {
          method: 'GET',
          url: url,
          headers: {
            accept: 'application/json',
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjE1Mzg1YzI3YTNmNjlkMWIzYzU5MTcxNTAzZWE4NTMwIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDItMTdUMjA6NDY6MTQuODA1NDQxIn0.Mzp0z0y5wLS8uTdiYVkOSWuaojMic6Isee0sG3HyFMc'
          }
        };
    
        axios(options)
          .then((response) => {
            console.log('Checking status...', response.data);
            if (response.data.status === "COMPLETED") {
              console.log("Process completed!", response.data);
              clearInterval(interval); // Stop polling if completed
            } else if (response.data.status === "FAILED") {
              console.log("Process failed!", response.data);
              clearInterval(interval); // Stop polling if failed
            }
            // You can add more conditions here for other statuses if necessary
          })
          .catch((error) => {
            console.error(error);
            clearInterval(interval); // Stop polling in case of error as well
          });
      }, 5000); // Poll every 5000 milliseconds (5 seconds)
    };
    
    checkStatus(process_id);

  }
  
   // Placeholder functions for live captioning, replace with actual implementation
   function startLiveCaptioning() {
    console.log("Starting live captioning...");
    // Implement call to start speech-to-text listening here
    // Update captions state with transcribed text
  }

  function stopLiveCaptioning() {
    console.log("Stopping live captioning...");
    // Implement call to stop speech-to-text listening here
  }


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} />
      <Button
        title="Flip Camera"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      />
      <Button title="Start Recording" onPress={startRecording} disabled={recording !== null} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={recording === null} />
      <Button title="List Recordings" onPress={listRecordings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
    width: '100%',
  },
});


import * as FileSystem from 'expo-file-system';

const listRecordings = async () => {
  try {
    // Specify the directory containing the recordings
    const directoryUri = FileSystem.cacheDirectory + '/';

    // Get the contents of the directory
    const { files } = await FileSystem.readDirectoryAsync(directoryUri);

    // Log the paths of files in the directory
    console.log('Recordings:', files);
  } catch (error) {
    console.error('Error listing recordings:', error);
  }
};
