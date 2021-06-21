import React from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart = () => {
    const data = {
        labels: ['Critiques', 'En cours', 'Résolus', 'Identifies'],
        datasets: [
            {
                label: 'Incidents',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        maintainAspectRatio:false,
    };

    return (
        <div style={{height: '50vh', width: '45%'}}>
            <Pie type={'pie'} data={data} options={options}/>
        </div>
    );
}

export default PieChart;