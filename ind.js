// Selecting the canvas for the chart
const ctx = document.getElementById('priceChart').getContext('2d');

// Creating a simple price chart with random data
const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Bitcoin Price (USD)',
            data: [30000, 32000, 34000, 36000, 38000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});
