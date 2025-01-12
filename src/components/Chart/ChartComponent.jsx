import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
    const chartData = {
        labels: data?.prices?.map(price => new Date(price[0]).toLocaleDateString()),
        datasets: [
            {
                label: 'Bitcoin Price (USD)',
                data: data?.prices?.map(price => price[1]),
                borderColor: '#4A90E2',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <Line data={chartData} />
        </div>
    );
};

export default ChartComponent;
