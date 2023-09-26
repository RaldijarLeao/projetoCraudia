import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  ImageBackground,
} from 'react-native';
import MyButton from '../components/NewButton';
import axios from 'axios';

const Login = ({navigation}: any) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const styleButton = {
    width: 150,
    backgroundColor: '#11BCCE',
    height: 60,
    borderRadius: 10,
    margin: 20,
    color: '#fff',
  };


  const loginSys = async () => {
    axios
      .post('https://tamagochiapi-clpsampedro.b4a.run/login', {
        email: login,
        password: password,
      })
      .then(res => {
        navigation.navigate('Cadastrar Novo Usuário');
      })
      .catch(error => {
        Alert.alert('Erro', 'Usuário incorreto!');
      });
  };

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
      color: '#000',
      borderColor: '#000',
      borderWidth: 2,
      margin: 15,
      paddingLeft: 10
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/plano-fundo-1.jpg')}
        style={styles.imageBackground}>
        <View style={styles.overlay}>
          <TextInput
            value={login}
            style={styles.input}
            placeholder="Usuário"
            onChangeText={setLogin}
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Senha"
            onChangeText={setPassword}
          />
          <MyButton
            title="Entrar"
            disable={false}
            onPressButton={loginSys}
            Style={styleButton}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
