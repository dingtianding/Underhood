import React, { useEffect } from 'react';

const MiniChart = ({ symbol, dailyValues, colorClass}) => {
  if (!symbol) return null;
  
  const labels = Object.keys(dailyValues);
  const data = Object.values(dailyValues).map(value => value['4. close']);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        fill: false,
        borderColor: colorClass === 'positive' ? 'green' : 'red',
        tension: 0.4,
        borderWidth: 1,

      }
    ]
  }
  
  const chartOptions = {
    scales: {
      x: {
        ticks: { display: false },
        grid: {
          display: false,
          drawBorder: false,
        },
        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
        },
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: false,
          grid: {
            display: false,
            drawBorder: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
          },        
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        enabled: false
      }
    },
    elements: {
      point: { radius: 0 }
    },
    hover: { mode: null },
  }

  useEffect(() => {
    const config = {
      type: 'line',
      data: chartData,
      options: chartOptions,
    };
    $(`#miniChart${symbol}`).remove();

    const newCanvas = document.createElement('canvas');
    newCanvas.setAttribute('id', `miniChart${symbol}`);
    newCanvas.setAttribute('class', 'miniChart');
    newCanvas.setAttribute('width', `100`);
    newCanvas.setAttribute('height', `69`);

    document.getElementById(`miniChartDiv${symbol}`).append(newCanvas)
    const canvas = document.getElementById(`miniChart${symbol}`);
    if (canvas) {
      const myChart = new Chart(canvas, config)
    }
  })

  return (
    <div className='miniChartDiv' id={`miniChartDiv${symbol}`}>
      <canvas className='miniChart' id={`miniChart${symbol}`} width={100} height={69} /> 
    </div>
  )
}


export default React.memo(MiniChart);