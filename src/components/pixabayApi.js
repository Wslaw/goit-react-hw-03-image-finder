import axios from "axios";
// const { default: axios } = require("axios");

const API_KEY = '40845730-59b552d3cf1577a71be805545';
const instance = axios.create({
  baseUrl: 'https://pixabay.com/api/',
});

export const fetchImages = async (query, page=1) => {
    // return instance.get(`?key=${API_KEY}&q=${query}&per_page=12&page=${page}`);
    try {
        const response = await instance.get(`?key=${API_KEY}&q=${query}&per_page=12&page=${page}`)
        return response.data;

    } catch (error) {
        console.log('Error', error);
        throw new Error('Error');
    }
}

