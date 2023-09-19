import React from 'react';
import Login from './src/screens/Login';
import CadastroUsuario from './src/screens/CadastrarUsuario';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tamagochi' component={Login} />
        <Stack.Screen name='Cadastrar Novo Usuário' component={CadastroUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

