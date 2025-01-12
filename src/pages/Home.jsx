import React, { useEffect, useState } from 'react';
import { getBitcoinData, getTrendingCoins } from '../services/cryptoApi';
import ChartComponent from '../components/Chart/ChartComponent';
import Metrics from '../components/Metrics/Metrics';

const Home = () => {
    const [btcData, setBtcData] = useState([]);
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const btcResponse = await getBitcoinData();
            const trendingResponse = await getTrendingCoins();
            setBtcData(btcResponse);
            setTrendingCoins(trendingResponse);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Bitcoin Dashboard</h1>
            <ChartComponent data={btcData} />
            <Metrics data={btcData} />
        </div>
    );
};

export default Home;
