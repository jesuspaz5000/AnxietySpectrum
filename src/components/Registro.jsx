// Registro.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Estilos from './Estilos';

const MyButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={Estilos.button}>
    <Text style={Estilos.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Registro = ({ navigation }) => {
  return (
    <View style={Estilos.contenedor}>
      <Text style={Estilos.titulo}>Crear cuenta</Text>
      
      <TextInput
        style={Estilos.input}
        placeholder="Nombre completo"
      />

      <TextInput
        style={Estilos.input}
        placeholder="Nombre de usuario"
      />
      
      <TextInput
        style={Estilos.input}
        placeholder="Correo electrónico"
      />
      
      <TextInput
        style={Estilos.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      <TextInput
        style={Estilos.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
      />
      
      <MyButton title="Crear cuenta" onPress={() => {}} />

      <Text style={Estilos.texto}>¿Ya tienes una cuenta?</Text>

      <MyButton title="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Registro;
