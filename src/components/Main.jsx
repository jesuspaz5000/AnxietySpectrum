
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Registro from './Registro';

const Stack = createStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      {/* más rutas aquí */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Main;
