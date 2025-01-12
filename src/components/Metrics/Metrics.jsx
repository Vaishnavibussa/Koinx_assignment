import React from 'react';

const Metrics = ({ data }) => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Key Metrics</h2>
            <p><strong>Market Cap:</strong> ${data?.market_caps?.[0]?.[1]?.toFixed(2)}</p>
            <p><strong>Volume:</strong> ${data?.total_volumes?.[0]?.[1]?.toFixed(2)}</p>
        </div>
    );
};

export default Metrics;
