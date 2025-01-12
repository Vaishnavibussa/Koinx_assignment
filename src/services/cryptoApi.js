import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getBitcoinData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/bitcoin/market_chart`, {
            params: {
                vs_currency: 'usd',
                days: '7',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        return null;
    }
};

export const getTrendingCoins = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/search/trending`);
        return response.data.coins;
    } catch (error) {
        console.error('Error fetching trending coins:', error);
        return [];
    }
};
