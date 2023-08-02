import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Registro from './Registro';
import Prediccion from './Prediccion';

const Stack = createStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Prediccion">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Prediccion" component={Prediccion} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Main;
