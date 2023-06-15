import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleLogin = async (login, senha) =>
{
  try
  {
    const url = `http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com/user/${login}/${senha}`;
    const response = await axios.get(url);

    if (response.status === 200)
    {
      const { id } = response.data; // Id to usuario

      const hashUrl = `http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com/user/${id}`;
      const hashResponse = await axios.get(hashUrl); // GET para hash do usuario a partir do id recebido
      const hash = hashResponse.data;

      await AsyncStorage.setItem('hash', hash); // Salva hash localmente
      await AsyncStorage.setItem('id', id); // Salva o id localmente (Para consultar hash a partir de api)
      return { success: true };
    }
  } catch (error)
  {
    return { success: false, error: error.message };
  }
};