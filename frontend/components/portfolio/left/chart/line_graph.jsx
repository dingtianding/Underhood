import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
  },
  hover: {
    intersect: false
  },
  elements: {
    line: {
      tension: 0
    },
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltip: {
    displayColors: false,
    yAlign: top,
    mode: 'nearest',
    intersect: false,
    callbacks: {

    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          display: false,
        }
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

function LineGraph({ casesType }) {
  const [data, setData] = useState({});

  useEffect(() => {
    
    let data = [];
    let value = 1000000;
    for(var i = 0; i < 366; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i-355);
      value += Math.round((Math.random() < 0.2 ? 1 : 0) * Math.random() * 10000);
      data.push({x: date, y: value});
    }   
    setData(data)
  }, []);

  return (
    <div className="linegraph">
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                data: data,
                fill: false,
                borderColor: 'green',
                tension: 0.4,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
