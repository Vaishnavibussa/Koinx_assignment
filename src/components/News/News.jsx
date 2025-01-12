import React from 'react';

const News = ({ coins }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Trending Coins</h2>
            {coins.map((coin, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <img src={coin.item.thumb} alt={coin.item.name} width="50" />
                    <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
                </div>
            ))}
        </div>
    );
};

export default News;
