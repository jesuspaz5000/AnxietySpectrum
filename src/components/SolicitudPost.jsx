import axios from 'axios';
import { Platform } from 'react-native';

let serverUrl = '';

// Check on which platform the code is running
if (Platform.OS === 'android') {
  // Android (emulator)
  serverUrl = 'http://10.0.2.2:8000/api/diagnoses/predictions/upload/';
}
else {
  // iOS or web
  serverUrl = 'http://127.0.0.1:8000/api/diagnoses/predictions/upload/';
}

export async function uploadFile(file) {
  let formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(serverUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file: ', error);
    throw error;
  }
}
