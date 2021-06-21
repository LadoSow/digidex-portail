import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
        datasets: [
            {
                label: 'Total',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255,45,45)',
                borderColor: 'rgba(255,45,45, 0.2)',
            },
            {
                label: 'Résolus',
                data: [15, 4, 9, 20, 1, 8],
                fill: false,
                backgroundColor: 'rgb(44,187,173)',
                borderColor: 'rgba(44,187,173, 0.2)',
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        maintainAspectRatio:false,
    };

    return (
        <div style={{height: '50vh', width: '45%'}}>
            <Line type={'line'} data={data} options={options}/>
        </div>
    );
}

export default LineChart;