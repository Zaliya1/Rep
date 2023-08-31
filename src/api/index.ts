import axios from "axios";
import axiosRetry from 'axios-retry';

export const request = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
    responseType: "json"
})

axiosRetry(request, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay
});
