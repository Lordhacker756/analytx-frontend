import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ jsonData }) => {
    const [chartData, setChartData] = useState({});

    const formatDataForChart = () => {
        const labels = Object.keys(jsonData.chartData);
        const ratings = Object.values(jsonData.chartData);

        const formattedData = {
            labels: labels,
            datasets: [
                {
                    label: 'Rating (0-5)',
                    data: ratings,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for bars
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        };

        setChartData(formattedData);
    };

    // Format the data when the component mounts
    useEffect(() => {
        formatDataForChart();
    }, []);

    return (
        <div className="h-[350px]">
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;
