import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';

const pokemons = [
  {
    name: 'pikachu',
    type: 'eletric',
  },
  {
    name: 'piplup',
    type: 'water',
  },
  {
    name: 'magikarp',
    type: 'water',
  },
];

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <Header title="Home Page" />
        <PokemonList pokemons={pokemons} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
