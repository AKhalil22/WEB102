import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SentimentChart = ({sentimentData}) => {
    // Debug console.log("@SentimentChart.jsx - Sentiment Data:", sentimentData);

    // Step 1: Transform data
    const chartData = sentimentData.map(item => ({
        // Create a date string like "2024-02-01"
        date: new Date(`${item.year}-${String(item.month).padStart(2, '0')}-01`).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
        }),
        sentiment: item.mspr,
    }));

    // Step 2: Render Chart Data
    return (
        <div className="sentiment-chart">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" interval="preserveStartEnd" angle={0} dy={7}/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sentiment" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SentimentChart;