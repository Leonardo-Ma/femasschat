import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { checkMessagesBetweenUsers, sendMessage } from './Controller.js';

import styles from './Message.style.js';

export default function Message({ route })
{
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const loadMessages = async (idOther) =>
    {
        const response = await checkMessagesBetweenUsers(idOther);
        if (response.success)
        {
            setMessages(response.messageArray);
        }
    };

    useEffect(() =>
    {
        if (route.params.idOther)
        {
            loadMessages(route.params.idOther);
        }
    }, [route.params.idOther]);

    const renderMessageItem = ({ item }) =>
    {
        return (
            <View style={styles.box} key={item.id}>
                <View style={styles.messageContent}>
                    <Text style={styles.dateTime}>{item.date} {item.time}</Text>
                    <Text style={styles.messageText}>{item.text}</Text>
                </View>
            </View>
        );
    };

    const handleInputTextChange = (text) =>
    {
        setInputText(text);
    };

    const handleSendMessage = async () =>
    {
        await sendMessage(route.params.idOther, inputText);
        setInputText('');
        loadMessages(route.params.idOther); 
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={30} color="black" style={styles.arrow} />
            </TouchableOpacity>

            {messages.length > 0 ? (
                <FlatList
                    data={messages}
                    renderItem={renderMessageItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text>No messages found.</Text>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua mensagem"
                    value={inputText}
                    onChangeText={handleInputTextChange}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Feather name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

