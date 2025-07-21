import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const ArticleVolumeChart = ({sortedArticles}) => {
    const [chartData, setChartData] = useState([]);

    // useEffect: Update chart when user changes filter
    useEffect(() => {
        // Condition: Check if sortedArticles
        if (!sortedArticles || sortedArticles.length === 0) return;

        // Debug console.log("@ArticleVolumeChart.jsx - Article Data:", sortedArticles);

        const groupedArticles = {};

        // Update Chart Data to match JSON of sortedArticles
        sortedArticles.forEach(article => {
            // Convert UNIX timestamp: seconds to milliseconds
            const articleDate = new Date(article.datetime * 1000);
            const dayKey = articleDate.toLocaleDateString('en-CA') // Format Candian (ISO Format Already)

            // Init: New Month as key for corresponding article
            if (!groupedArticles[dayKey]) {
                groupedArticles[dayKey] = { date: dayKey, volume: 0 };
            }

            // Increament volume count for current article
            groupedArticles[dayKey].volume += 1;
        });

        // Debug console.log("@ArticleVolumeChart.jsx - Populated Hashmap:", groupedArticles)

        // Set Transformed Data (Sort from oldest → newest )
        const chartFormattedData = Object.values(groupedArticles).sort((a, b) => 
            new Date(a.date) - new Date(b.date)
        );
        setChartData(chartFormattedData);
        // Debug console.log("@ArticleVolumeChart.jsx - Update Chart Data:", chartFormattedData)

    }, [sortedArticles])

    return (
        <div className="article-volume-chart">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                <XAxis dataKey="date" interval="preserveStartEnd" dy={7}/>
                <YAxis />
                <Tooltip />
                <Bar dataKey="volume" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ArticleVolumeChart;