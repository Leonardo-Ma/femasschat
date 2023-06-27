import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './CreateAccount.style.js';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { handleCadastro } from './Controller.js';

export default function CreateAccount()
{
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const cadastrar = () =>
  {
    if (!nome || !avatar || !senha || !email || !telefone)
    {
      setErrorMessage('Insira todos os campos.');
      return;
    }
    else
    {
      
      if (handleCadastro(nome, avatar, senha, email, telefone))
        navigation.navigate("Chats");
    }
  };

  const selectAvatar = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (!permissionResult.granted) {
        console.log('Permissao negada.');
        return;
      }
  
      const imageResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!imageResult.canceled && imageResult.assets.length > 0) {
        const selectedAsset = imageResult.assets[0];
        if (selectedAsset.uri) {
          const base64String = await FileSystem.readAsStringAsync(selectedAsset.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setAvatar(`data:${selectedAsset.type};base64,${base64String}`);
        }
      }
    } catch (error) {
      console.log('Error selecting avatar:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#15202b" barStyle="light-content" />
      <Text style={styles.femasschat}>FeMASSChat</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          required />
        {avatar && (<Image source={{ uri: avatar }} style={styles.avatarPreview} resizeMode="cover" />)}
        <TouchableOpacity
          style={styles.avatarButton}
          onPress={selectAvatar}
          required>
          <Ionicons name="md-camera" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          required />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          required />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          required />
        <TouchableOpacity style={styles.registerButton} onPress={() => cadastrar()}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </View>
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>
    </View>
  );
}