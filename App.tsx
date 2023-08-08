import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

// const App = () => {}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Montagem');
  }, []);

  useEffect(() => {
    console.log('Atualização');
  }, [contador]);

  useEffect(() => {
    return () => {
      console.log('Desmontagem');
    };
  }, []);

  const onPressButton = () => {
    setContador(contador + 1);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button title="+1 contador" onPress={onPressButton} />
        <Text style={{fontSize: 24}}>{contador}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
