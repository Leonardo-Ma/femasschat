import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './NewConversation.style.js';
import { useNavigation } from '@react-navigation/native';

export default function NewConversation()
{
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () =>
    {
        if (searchQuery.length >= 3)
        {
            // Perform search logic here
            console.log('Pesquisando por:', searchQuery);
        } else
        {
            console.log('Minimo 3 caracteres');
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.femasschat}>FeMASSChat</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Quem procura?"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
}
