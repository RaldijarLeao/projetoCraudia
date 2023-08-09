import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <Header title="Home Page" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
