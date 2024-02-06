import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

const options = {
  params: {
    latitude: '21.1102800',
    longitude: '44.1780600',
    limit: '30',
  },
  headers: {
    'X-RapidAPI-Key': '206a471709msh81e81a3624a965cp1af394jsn6d20eb25bd13',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
};

export const getPlacesData = async () => {
  try {
    const response = await axios.get(URL, options);
    console.log(response.data);
    return response.data; // Retornar os dados, não a resposta completa
  } catch (error) {
    console.error(error);
    throw error; // Lançar o erro para que o chamador saiba que algo deu errado
  }
};
