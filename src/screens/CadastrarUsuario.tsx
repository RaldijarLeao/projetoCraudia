import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import NewButton from '../components/NewButton';
import axios from 'axios';

const CadastroUsuario = ({navigation}: any) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    overlay: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 60,
      width: 300,
      borderRadius: 3,
      color: '#fff',
      borderColor: '#fff',
      borderWidth: 2,
      margin: 15,
      paddingLeft: 10
    }
  });

  const styleButton = {
    width: 150,
    backgroundColor: '#11BCCE',
    height: 60,
    borderRadius: 10,
    margin: 20,
    color: '#fff',
  };
  
  const register = async () => {
    axios.post(
      'https://tamagochiapi-clpsampedro.b4a.run/register',
      {
        email: login,
        password: password,
      }
    )
    .then(res => {
      Alert.alert('Sucesso!', 'Usuário registrado!')
      navigation.navigate('Tamagochi');
    })
    .catch(error => Alert.alert('Erro!', 'Usuário incorreto!'))

  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/plano-fundo-2.jpg')}
        style={styles.imageBackground}>
        <View style={styles.overlay}>
          <TextInput
            value={login}
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#fff" 
            onChangeText={setLogin}
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff" 
            onChangeText={setPassword}
          />
          <NewButton
            title="Cadastrar"
            onPressButton={register}
            Style={styleButton}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CadastroUsuario;
