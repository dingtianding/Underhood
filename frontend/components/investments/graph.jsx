import React from 'react';

class PortfolioGraph extends React.Component {
  render(
      const searchFrom = document.querySelector('.search');
      const input = document.querySelector('.input');
      const newsList = document.querySelector('.news-list');

      
      searchFrom.addEventListener('submit', createChart)
      searchFrom.addEventListener('submit', getNews)

      function getNews(el){
        if (input.value ===''){
          alert('Please enter a stock!')
          return
        }
        newsList.innerHTML = ''
        el.preventDefault()
        const apiKey = '9803bf19a56d4f2784a06878e6855667'
        let topic = input.value;
        if (input.value ==='TSLA'){
          topic = "Tesla"
        }
        let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{
        
          data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank')
            a.textContent = article.title
            li.appendChild(a);
            newsList.appendChild(li);
          })
        }).catch((error)=>{
          console.log(error)
        })
      }
        const xdates = [];
        const yprices = [];
        // searchFrom.addEventListener('submit', createChart())
        // createChart();

        async function createChart() {
        const data = await getData();
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.xs,
                datasets: [{
                    label: 'Tesla Stock Price in USD ($)',
                    data: data.ys,
                    fill: true,
                    backgroundColor: 'rgba(0, 255, 0, .2)',
                    borderColor: 'rgba(0, 100, 0, 1)',
                    borderWidth: 1
                    }
                ]
            },
            plugins: [plugin],
            options: {
            scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
        });
    }
    const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext('2d');
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = "rgba(0, 0, 0, 0.88)";
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };
        //Data from https://finance.yahoo.com/quote/TSLA/history/
        
        getData();
        async function getData(){
            const xs = [];
            const ys = [];
            
            const response = await fetch('stuff/TSLA.csv');
            const data = await response.text();


            const table = data.split('\n').slice(1);
            table.forEach(row => {
                const columns = row.split(',');
                const date = columns[0].slice(0, 7);
                xs.push(date);
                const open = columns[1];
                ys.push(open)
            });
            return { xs, ys }
        }
        return(
          <canvas id="myChart" width="400" height="300"></canvas>
        )}
          

    export default InvestmentGraph

    import React from 'react'
// import { Line } from "react-chartjs-2"
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);


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
//       xAxes: [
//         {
//           type: "time",
//           time: {
//             format: "MM/DD/YY",
//             tooltipFormat: "ll",
//           },
//           ticks: {
//             display: false,
//           }
//         },
//       ],
//       yAxes: [
//         {
//           gridLines: {
//             display: false,
//           },
//           ticks: {
//             display: false,
//           },
//         },
//       ],
//     },
//   };
// function LineGraph (){
    
//     const data = 
//     [
//         { x: 10, y: 20 }, 
//         { x: 15, y: 10 }, 
//         { x: 20, y: 50 }, 
//         { x: 25, y: 25 }
//     ]
    
    

//     return (
//         <div>
     
//         <Line
//           data={{
            
//             labels: [10,15,20,25,30],
            
//             datasets: [
//               {
//                 type: 'line',
//                 data: data,
//                 backgroundColor: "black",
//                 borderColor: "#5AC53B",
//                 yAxisID: 'y',
//                 borderWidth: 2,
//                 pointBorderColor: 'rgba(0, 0, 0, 0)',
//                 pointBackgroundColor: 'rgba(0, 0, 0, 0)',
//                 pointHoverBackgroundColor: '#5AC53B',
//                 pointHoverBorderColor: '#000000',
//                 pointHoverBorderWidth: 4,
//                 pointHoverRadius: 6,
        
//               },
//             ],
//              }}
//           options = {{
//               legend: {
//                   display: false
//               }
//           }}

//         />

//     </div>
//       );
//     }
    

// export default LineGraph;