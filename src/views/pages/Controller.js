import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com';

export const getIdAsyncStorage = async () =>
{
  try
  {
    const id = await AsyncStorage.getItem('id');
    return id ? JSON.parse(id) : null;
  } catch (error)
  {
    return null;
  }
}

export const handleLogin = async (login, senha) =>
{
  try
  {
    const url = `${URL}/user/${login}/${senha}`;
    const response = await axios.get(url);

    if (response.status === 200)
    {
      const { id } = response.data; // Id to usuario

      const hashUrl = `${URL}/user/${id}`;
      const hashResponse = await axios.get(hashUrl); // GET para hash do usuario a partir do id recebido
      const hash = hashResponse.data;

      await AsyncStorage.setItem('hash', JSON.stringify(hash)); // Salva hash localmente
      await AsyncStorage.setItem('id', JSON.stringify(id)); // Salva o id localmente (Para consultar hash a partir de api)
      return { success: true };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
};

export const handleCadastro = async (nome, avatar, senha, email, telefone) =>
{
  try
  {
    const response = await axios.post(`${URL}/user/`, {
      nome,
      avatar,
      senha,
      email,
      telefone
    });

    if (response.status === 200)
    {
      await handleLogin(telefone, senha);
      return { success: true };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
};

export const checkUserWithMessages = async () =>
{
  const id = await getIdAsyncStorage();
  try
  {
    const url = `${URL}/message/buscarUsuariosComConversa/${id}`;
    const response = await axios.get(url);

    if (response.status === 200)
    {
      const chatsArray = response.data.map(({ id, nome, avatar }) => ({
        id,
        name: nome,
        avatar,
      }));

      return { success: true, chatsArray };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
}

export const checkMessagesBetweenUsers = async (idOther) =>
{
  const id = await getIdAsyncStorage();
  try
  {
    const url = `${URL}/message/buscarMensagensComUmUsuario/${id}/${idOther}`;
    const response = await axios.get(url);

    if (response.status === 200)
    {
      const messageArray = response.data.map(({ id, dataHora, from, mensagem }) => ({
        id,
        date: new Date(dataHora).toLocaleDateString(),
        time: new Date(dataHora).toLocaleTimeString(),
        text: mensagem
      }));

      return { success: true, messageArray };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
};

export const checkUsers = async () =>
{
  try
  {
    const url = `${URL}/message/buscarUsuarios/22`;
    const response = await axios.get(url);

    if (response.status === 200)
    {
      const usersArray = response.data.map(({ id, nome, apelido, email, telefone }) => ({
        id,
        name: nome,
        nickname: apelido,
        email,
        phone: telefone
      }));

      return { success: true, usersArray };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
};

export const sendMessage = async (idTo, mensagem) =>
{
  const idFrom = await getIdAsyncStorage();
  try
  {
    console.log(idFrom, idTo, mensagem);
    const response = await axios.post(`${URL}/message/enviarMensagem`, {
      idFrom,
      idTo,
      mensagem
    });
    if (response.status === 200)
    {
      return { success: true };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
}