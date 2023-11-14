import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import axios from 'axios';

import NewButton from '../components/NewButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Card, Dialog, Provider, Portal, Avatar} from 'react-native-paper';

const styleButton = {
  width: 150,
  backgroundColor: '#11BCCE',
  height: 60,
  borderRadius: 10,
  margin: 20,
  color: '#fff',
};

const styles = StyleSheet.create({
  cadastro: {
    alignItems: 'center',
    backgroundColor: '#83ECFF',
  },
  input: {
    height: 50,
    width: 190,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
  cardContainer: {
    margin: 4,
    backgroundColor:"#C3F6FF"
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textContainer: {
    gap: 6,
  },
  button: {
    flexDirection: 'row',
    padding: 2,
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
type item = {
  tamagotchi: {
    name: string;
    life: number;
    funLevel: number;
    id: number;
  };
};

const ListaTamagochi = ({navigation}: any) => {
  const [idBichinho, setIdBichinho] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [nomeAtualizado, setNomeAtualizado] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [tamagochi, setTamagotchi] = useState({pets: []});

  const getToken = async () => {
    try {
      let userToken = (await AsyncStorage.getItem('token')) || 'none';
      return userToken;
    } catch (error) {
      console.log(error);
    }
  };

  const randomIndex = Math.floor(Math.random() * 2);

  const imageSources = [
    require('../images/Screenshot_3.png'),
    require('../images/Screenshot_4.png')
  ];

  const selectedImage = imageSources[randomIndex];


  const ListItem = ({tamagotchi}: item) => {
    return (
      <SafeAreaView>
        <Card mode="contained" style={styles.cardContainer}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.textContainer}>
            <Image
                source={selectedImage}
                style={{width: 100, height: 100}}
              />
              <Text style={styles.text}>Nome: {tamagotchi.name}</Text>
              <Text style={styles.text}>Vida: {tamagotchi.life}</Text>
              <Text style={styles.text}>Diversão: {tamagotchi.funLevel}</Text>
              
              <View style={{flexDirection:'row'}}>
              <View >
                <NewButton
                  title="Ações"
                  disable={false}
                  onPressButton={() =>
                    navigation.navigate(`Ações`, {id: tamagotchi.id})
                  }
                  Style={styleButton}
                />
              </View>
              <View>
                <NewButton
                  title="Brincar"
                  disable={false}
                  onPressButton={() =>
                    navigation.navigate(`Brincar`, {id: tamagotchi.id})
                  }
                  Style={styleButton}
                />
              </View>
              </View>
              <View style={styles.button}>
                <NewButton
                  title="Editar"
                  disable={false}
                  onPressButton={() => showDialog(tamagotchi.id)}
                  Style={styleButton}
                />
                <NewButton
                  title="Excluir"
                  disable={false}
                  onPressButton={() => deletaBichinho(tamagotchi.id)}
                  Style={styleButton}
                />
              </View>
            </View>
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  };
  const showDialog = (id: number) => {
    setIdBichinho(id);
    if (id === 0) {
      return;
    }
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    setIdBichinho(0);
    setNomeAtualizado('');
  };
  const deletaBichinho = async (id: number) => {
    const token = await getToken();

    try {
      await axios.delete('https://tamagochiapi-clpsampedro.b4a.run/pet/' + id, {
        headers: {
          'x-access-token': token,
        },
      });
      request();
    } catch (error) {
      Alert.alert('Erro', `${error}`, [
        {text: 'Ok', onPress: () => console.log('Ok')},
      ]);
    }
  };

  const atualizaBichinho = async () => {
    const token = await getToken();
    try {
      await axios.put(
        'https://tamagochiapi-clpsampedro.b4a.run/pet/' + idBichinho,
        {
          name: nomeAtualizado,
        },
        {
          headers: {
            'x-access-token': token,
          },
        },
      );
      request();
    } catch (error) {
      Alert.alert('Erro', `${error}`, [
        {text: 'Ok', onPress: () => console.log('Ok')},
      ]);
    } finally {
      hideDialog();
    }
  };

  const cadastraBichinho = async () => {
    const token = await getToken();
    if (!name) {
      Alert.alert(
        'Atenção',
        'Insira o nome do bichinho para realizar o cadastro',
        [{text: 'OK', onPress: () => console.log('Ok')}],
      );
      return;
    }
    try {
      console.log('name', name);
      console.log('=token=', token);

      await axios.post(
        'https://tamagochiapi-clpsampedro.b4a.run/pet',
        {
          name: name,
        },
        {
          headers: {
            'x-access-token': token,
          },
        },
      );
      request();
      setName('');
    } catch (error) {
      Alert.alert('Erro', `${error}`, [
        {text: 'Ok', onPress: () => console.log('Ok')},
      ]);
    }
  };

  const request = useCallback(async () => {
    const token = await getToken();
    try {
      const {data} = await axios.get(
        'https://tamagochiapi-clpsampedro.b4a.run/pets',
        {
          headers: {
            'x-access-token': token,
          },
        },
      );

      setTamagotchi(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    request();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.cadastro}>
        <ImageBackground
          source={require('../images/plano-fundo-1.jpg')}
          style={styles.imageBackground}>
          <NewButton
            title="Sair"
            disable={false}
            onPressButton={() => {
              navigation.navigate('Tamagochi');
            }}
            Style={styleButton}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              value={name}
              style={styles.input}
              placeholder="Nome"
              onChangeText={setName}
            />
            <NewButton
              title="Gravar"
              disable={false}
              onPressButton={() => cadastraBichinho()}
              Style={styleButton}
            />
          </View>
        </ImageBackground>

        <View>
          <FlatList
            data={tamagochi.pets}
            renderItem={({item}) => <ListItem tamagotchi={item} />}
          />
        </View>

        {/* </ImageBackground> */}
      </SafeAreaView>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Editar</Dialog.Title>
          <Dialog.Content>
            <TextInput
              value={nomeAtualizado}
              style={styles.input}
              placeholder="Alterar Nome"
              onChangeText={setNomeAtualizado}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <NewButton
                title="Salvar"
                disable={false}
                onPressButton={() => atualizaBichinho()}
                Style={styleButton}
              />
              <NewButton
                title="Cancelar"
                disable={false}
                onPressButton={() => hideDialog()}
                Style={styleButton}
              />
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

export default ListaTamagochi;
