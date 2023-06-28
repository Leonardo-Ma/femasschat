import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './Chats.style.js';
import { useNavigation } from '@react-navigation/native';
import { checkUserWithMessages } from './Controller.js';

export default function Chats()
{
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);

  useEffect(() =>
  {
    loadUsersWithMessage();
  }, []);

  const loadUsersWithMessage = async () =>
  {
    const response = await checkUserWithMessages();
    if (response.success)
    {
      setMessages(response.chatsArray);
    }
  };

  const handleNewConversation = () =>
  {
    loadUsersWithMessage();
    navigation.navigate('NewConversation');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate('Home')}>
        <Feather name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      {messages.map((message) => (
        <TouchableOpacity onPress={() => navigation.navigate("Message", { idOther: message.id })}
          style={styles.box} key={message.id}>
          <Image source={{ uri: `${message.avatar}` }} style={styles.avatar} />
          <View style={styles.messageContent}>
            <Text style={styles.userName}>{message.name}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.newConversationButton} onPress={handleNewConversation}>
        <Text style={styles.newConversationButtonText}>Nova Conversa</Text>
      </TouchableOpacity>
    </View>
  );
}
