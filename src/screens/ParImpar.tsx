import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Image, Input } from 'react-native-elements';
import NewButton from '../components/NewButton';

const ParImpar = (navigation:any) => {
  const [userChoice, setUserChoice] = useState<string>('');
  const [computerChoice, setComputerChoice] = useState<number | ''>('');
  const [result, setResult] = useState<string>('');

  const handleUserChoiceChange = (value: string) => {
    setUserChoice(value);
  };

  const styleButton = {
    width: 150,
    backgroundColor: '#11BCCE',
    height: 60,
    borderRadius: 10,
    margin: 20,
    color: '#fff',
  };

  const playGame = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const total = parseInt(userChoice) + randomNumber;

    setComputerChoice(randomNumber);

    if (total % 2 === 0) {
      setResult('Par');
    } else {
      setResult('Ímpar');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
                source={require('../images/Screenshot_3.png')}
                style={{width: 130, height: 190}}
              />
      <Text>Escolha um número:</Text>
      <Input
        placeholder="Digite um número"
        keyboardType="numeric"
        value={userChoice}
        onChangeText={handleUserChoiceChange}
      />
      <Button title="Jogar" onPress={playGame} />
      {computerChoice !== '' && (
        <View>
          <Text>O computador escolheu: {computerChoice}</Text>
          <Text>O resultado é: {result}</Text>
        </View>
      )}
    </View>
  );
};

export default ParImpar;