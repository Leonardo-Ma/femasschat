import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './Chats.style.js';
import { useNavigation } from '@react-navigation/native';

export default function Chats()
{
  const navigation = useNavigation();
  const blocks = [
    { id: 1, name: 'Patrick', message: 'Mensagem' },
    { id: 2, name: 'Ricardo', message: 'Mensagem' },
    { id: 3, name: 'Yago', message: 'Mensagem' },
    { id: 4, name: 'Brendownmn', message: 'Mensagem' },
    { id: 5, name: 'Geladeira', message: 'Mensagem' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate('Home')}>
        <Feather name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.femasschat}>FeMASSChat</Text>

      {blocks.map((block) => (
        <View style={styles.box} key={block.id}>
          <Feather name="user" size={60} color="gray" style={styles.userIcon} />
          <Text style={styles.userName}>{block.name}</Text>
          <Text style={styles.messageText}>{block.message}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.newConversationButton}
        onPress={() => navigation.navigate('NewConversation')}      >
        <Text style={styles.newConversationButtonText}>Nova Conversa</Text>
      </TouchableOpacity>
    </View>
  );
}