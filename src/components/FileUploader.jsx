import React from 'react';
import { uploadFile } from './SolicitudPost';

class FileUploader extends React.Component {
    handleUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        // Crea un Blob a partir de los datos leídos
        const blob = new Blob([event.target.result], { type: 'text/csv' });
  
        // Llama a la función uploadFile con el Blob
        const prediction = await uploadFile(blob);
        this.setState({ prediction });
      };
  
      // Lee el archivo como un ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  
    render() {
      return <input type="file" onChange={this.handleUpload} />;
    }
  }
  
  export default FileUploader;
  