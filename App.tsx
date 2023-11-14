import React from 'react';
import Login from './src/screens/Login';
import CadastroUsuario from './src/screens/CadastrarUsuario';
// import CadastroTamagochi from './src/screens/CadastroTamagochi';
import ListaTamagochi from './src/screens/ListaTamagochi';
// import DeletaTamagochi from './src/screens/DeletaTamagochi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";
import Acoes from './src/screens/Acoes';
import ParImpar from './src/screens/ParImpar';


export const colors = {
  primary: "#4af0cf",
  secondary: "#ff3691",
  primaryDark: "#4af0fc",
  text: "#000",
  surfaceVariant: "#dcdcdc"
}

const App = () => {
  const Stack = createNativeStackNavigator();

  const theme = {
    ...DefaultTheme,
  
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      secondary: colors.secondary,
      surfaceVariant: colors.surfaceVariant,
      text: colors.text
    }
  }
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tamagochi' component={Login} />
        <Stack.Screen name='Cadastrar Novo Usuário' component={CadastroUsuario} />
        <Stack.Screen name='Listar Tamagochi' component={ListaTamagochi} />
        <Stack.Screen name='Ações' component={Acoes} />
        <Stack.Screen name='Brincar' component={ParImpar} />
        {/* <Stack.Screen name='Deletar Tamagochi' component={DeletaTamagochi} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    
  );
}

export default App;

