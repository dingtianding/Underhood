import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LineGraph (){
    
    const data = 
    [
        { x: 10, y: 20 }, 
        { x: 15, y: 10 }, 
        { x: 20, y: 50 }, 
        { x: 25, y: 25 }
    ]
    
    // const options = {
    //     legend: {
    //       display: false,
    //     },
    //     hover: {
    //       intersect: false
    //     },
    //     elements: {
    //       line: {
    //         tension: 0
    //       },
    //       point: {
    //         radius: 0,
    //       },
    //     },
    //     maintainAspectRatio: false,
    //     tooltips: {
    //       mode: "index",
    //       intersect: false,
    //       callbacks: {
    //       },
    //     },
    //     scales: {
    //       yAxes: [
    //         {
    //             display: false
    //         },
    //       ],
    //     },
    //   };

    return (
        <div>
     
        <Line
          data={{
            labels: [10,15,20,25],
            datasets: [
              {
                type: 'line',
                data: data,
                backgroundColor: "black",
                borderColor: "#5AC53B",
                
                // borderWidth: 2,
                // pointBorderColor: 'rgba(0, 0, 0, 0)',
                // pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                // pointHoverBackgroundColor: '#5AC53B',
                // pointHoverBorderColor: '#000000',
                // pointHoverBorderWidth: 4,
                // pointHoverRadius: 6,
        
              },
            ],
          }}
        //   options={options}
        />

    </div>
      );
    }
    

export default LineGraph;