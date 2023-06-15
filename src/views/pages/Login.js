import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Login.style.js';
import { handleLogin } from './Controller.js';

export default function LoginScreen()
{
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginPress = () =>
  {
    handleLogin(login, senha, setErrorMessage);
    if (!errorMessage)
      navigation.navigate("Chats");
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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLoginPress}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>
    </View>
  );
}