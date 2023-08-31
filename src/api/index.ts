import axios from "axios";
import axiosRetry, {isNetworkOrIdempotentRequestError} from 'axios-retry';
const controller = new AbortController();

axiosRetry(axios, {
    retries: 3,
    retryCondition: e => { return isNetworkOrIdempotentRequestError(e) },
    retryDelay: axiosRetry.exponentialDelay
});

export const request = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
    responseType: "json"
})
