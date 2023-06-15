import React, { useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home()
{
  const navigation = useNavigation();

  useEffect(() =>
  {
    const checkHash = async () =>
    {
      try
      {
        const hash = await AsyncStorage.getItem('hash');
        const id = await AsyncStorage.getItem('id');
        if (hash)
        {
          const url = `http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com/user/${id}`;

          const response = await axios.get(url);

          if (response.status == 200 && response.data == hash)
          {
            navigation.navigate('Chats');
          }

        }
      } catch (error)
      {
        console.log(error);
      }
    };

    checkHash();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>FemassChat</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'orange',
    width: 250,
    height: 60,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
