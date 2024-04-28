import axios from 'axios';

const baseUrl = 'https://rain.bless.bet/api';

export const $api = axios.create({
    baseURL: baseUrl,
});
