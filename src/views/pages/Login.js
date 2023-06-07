import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Login.style.js';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen()
{
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () =>
  {
    try
    {
      const url = `http://localhost:8080/user/${login}/${senha}`;

      const response = await axios.get(url);

      if (response.status === 200)
      {
        const { id } = response.data; // Id to usuario

        const url = `http://localhost:8080/user/${id}`;
        const hash = await axios.get(url);// GET para hash do usuario a partir do id recebido

        await AsyncStorage.setItem('hash', hash); // Salva hash no local

        navigation.navigate('Chats');
      }
    } catch (error)
    {
      setErrorMessage(error.message);
      setSenha('');
    }

  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#15202b" barStyle="light-content" />
      <Text style={styles.femasschat}>FeMASSChat</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>E-Mail ou telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </View>
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>
    </View>
  );
}