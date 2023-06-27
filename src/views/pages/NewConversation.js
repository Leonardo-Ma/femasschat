import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './NewConversation.style.js';
import { useNavigation } from '@react-navigation/native';
import { checkUsers } from './Controller.js';

export default function NewConversation() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.length >= 3) {
      const response = await checkUsers(searchQuery);
      if (response.success) {
        setUsers(response.usersArray);
      } else {
        setUsers([]);
      }
    } else {
      setUsers([]);
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
      {searchQuery.length < 3 && (
        <Text style={styles.minimumCharacterText}>Mínimo de 3 caracteres</Text>
      )}
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.userItem}
              onPress={() => {
                // Handle user selection logic here
              }}
            >
              <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
              <Text style={styles.userName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noUsersText}>Nenhum usuário encontrado</Text>
      )}
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}