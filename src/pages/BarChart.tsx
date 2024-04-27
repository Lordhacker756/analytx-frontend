import  { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

const BarChart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );


    const data = {
        labels: [
            'Responsibility',
            'Ability to learn',
            'Research skills',
            'Quality of work',
            'Communication skills',
            'Planning and problem solving'
        ],
        datasets: [
            {
                label: 'Rating (0-5)',
                data: [4, 3, 5, 4, 2, 5], // Example ratings for each attribute
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for bars
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 5
            }
        }
    };

    return (
        <div
            className={" h-[350px]"}
        >
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
