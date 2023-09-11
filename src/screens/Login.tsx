import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
});

const Login = ({ navigation }: any) => {
  const [text, setText] = useState<string>();
  const [hasError, setHasError] = useState(false);

  const onChangeInput = (value: string) => {
    if (value.length >= 6) {
      setHasError(false);
    } else {
      setHasError(true);
    }
    setText(value);
  };

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeInput}
      />
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Login"
      />
    </SafeAreaView>
  );
};

export default Login;
