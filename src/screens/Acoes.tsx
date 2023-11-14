import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Stats = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const StatText = styled.Text`
  margin-right: 20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Acoes = ({ route }: any) => {
  const [pet, setPet] = useState<any | null>(null)
  const {  id } = route.params;



  const brincar = async () => {
    const response = await axios.post(`https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/play`);
    setPet(response.data);
  };

  const comer = async () => {
    const response = await axios.post(`https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/food`);
    setPet(response.data);
  };

  const dormir = async () => {
    const response = await axios.post(`https://tamagochiapi-clpsampedro.b4a.run/pet/${id}/rest`);
    setPet(response.data);
  };

  return (
    <Container>
      <Heading>Tamagotchi</Heading>
      <ButtonContainer>
        <Button title="Brincar" onPress={brincar} />
        <Button title="Alimentar" onPress={comer} />
        <Button title="Dormir" onPress={dormir} />
      </ButtonContainer>
    </Container>
  );
};

export default Acoes;