import React, { useState, useEffect} from 'react'
import axios from "axios";
import StatsRow from "./stats_row";
import StockChart from '../../../app/assets/images/stock.svg';
import { Link } from 'react-router-dom';


const key= "c8it1riad3ibm5ej5gu0"
const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${key}`;


function Stats () {

    const [stockData, setstockData] = useState([])

    const getStocksData = (stock) => {
        return axios
        .get(`${BASE_URL}${stock}${KEY_URL}`)
        .catch((error) => {
        console.error("Error", error.message);
      });
    }

    useEffect(() => {
        let testData = []
        const stocksList = ["TSLA", "GME", "FB", "AAPL", "AMZN", "NFLX", "GOOG", "GOOGL", "BABA", "BILI", "NIO", "AMD", "ATVI", "MU", "XAR", "NIO", "JD", "IQ", "BIDU", "CENN", "USO", "RUN", "XOM", "ARKK", "NULL"];
    
        // getMyStocks();
        let promises = [];
        stocksList.map((stock) => {
          promises.push(
            getStocksData(stock)
            .then((res) => {
              testData.push({
                name: stock,
                ...res.data
              });
            })
          )
        });
        
        Promise.all(promises).then(()=>{
          setstockData(testData);
        })
      }, []);

    return (
        <div className="stats">
          <div className="stats_container">
              <div className="stats_header">
                  <p>Stocks</p>
              </div>
              <div className="stats__content">
              <div className="stats__rows">
                    <Link to={`/stocks/AAPL`} key={"AAPL"} className='link-to-stock-show'>
                      <div className="row">
                        <div className="row_intro">
                          <h1>AAPL</h1>
                          <p className="row_shares">8,666 Shares</p>
                        </div>
                        <div className="row_chart">
                          <img src={StockChart} height={16}/>
                        </div>
                        <div className="row_numbers">
                          <p className="row_price">158.3</p>
                          <p className="row_percentage">-2.5%</p>
                        </div>
                      </div>
                    </Link>
              </div>
        </div>
              <div className="stats_header">
                  <p>Lists</p>
              </div>
              <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
          </div>
        </div>
    )
}

export default Stats

// c8it1riad3ibm5ej5gu0   API Key