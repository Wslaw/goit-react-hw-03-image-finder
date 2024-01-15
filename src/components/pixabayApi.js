import axios from 'axios';

const API_KEY = '40845730-59b552d3cf1577a71be805545';

const fetchImages = async (search, page) => {
  const baseUrl = 'https://pixabay.com/api/';
  const perPage = 12;

  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: search,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
      },
    });

    return response.data.hits;
  } catch (error) {
    throw new Error('Error fetching images from Pixabay API');
  }
};

const pixabayAPI = {
  fetchImages,
};

export default pixabayAPI;
