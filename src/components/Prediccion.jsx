import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import * as DocumentPicker from 'react-native-document-picker'; // Importa la librería DocumentPicker
import { uploadFile } from './SolicitudPost.jsx';

export default function Prediccion() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!file) {
        console.error('No file selected');
        return;
      }

      const result = await uploadFile(file);
      console.log('Upload successful: ', result);
    } catch (error) {
      console.error('Error uploading file: ', error);
    } finally {
      setUploading(false);
    }
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // Puedes especificar el tipo de archivos que deseas permitir aquí
      });
      setFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // El usuario canceló la selección de archivos
        console.log('Canceled');
      } else {
        console.error('Error selecting document: ', err);
      }
    }
  };

  return (
    <View>
      <Button title="Select File" onPress={selectFile} />
      <Button title="Upload File" onPress={handleUpload} disabled={!file || uploading} />
      {uploading && <Text>Uploading...</Text>}
    </View>
  );
}
