import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Estilos from './Estilos';

const Login = () => {
  return (
    <View style={Estilos.contenedor}>
      <Text style={Estilos.titulo}>Iniciar sesión</Text>
      
      <TextInput
        style={Estilos.input}
        placeholder="Nombre de usuario"
      />
      
      <TextInput
        style={Estilos.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      
      <Button title="Iniciar sesión" onPress={() => {}} />
    </View>
  );
};

export default Login;
