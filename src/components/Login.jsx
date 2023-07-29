import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Estilos from './Estilos';

const MyCheckbox = ({ isSelected, onValueChange }) => (
  <TouchableOpacity onPress={onValueChange} style={Estilos.checkbox}>
    {isSelected && <Icon name="check" size={20} color="black" />}
  </TouchableOpacity>
);

const MyButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={Estilos.button}>
    <Text style={Estilos.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Login = ({ navigation }) => { // Recibe el objeto navigation como prop
  const [isSelected, setSelection] = useState(false);

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

      <View style={Estilos.checkboxContainer}>
        <MyCheckbox
          isSelected={isSelected}
          onValueChange={() => setSelection(!isSelected)}
        />
        <Text style={Estilos.label}>Recordarme</Text>
      </View>
      
      <MyButton title="Ingresar" onPress={() => {}} />

      <Text style={Estilos.texto}>¿No tienes una cuenta?</Text>

      <MyButton title="Crear cuenta" onPress={() => navigation.navigate('Registro')} />
    </View>
  );
};

export default Login;
