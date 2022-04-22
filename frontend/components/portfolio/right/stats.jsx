import React, { useState, useEffect} from 'react'
import axios from "axios";
import StatsRow from "./list/stats_row";
import StockChart from '../../../../app/assets/images/stock.svg';
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
        const stocksList = ["TSLA", "GME", "FB", "AAPL", "AMZN", "NFLX", "GOOG", "GOOGL", "BABA", "BILI", "AMD", "ATVI", "MU", "XAR", "NIO","ARKK"];
    
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
                    <Link to={`/assets/AAPL`} key={"AAPL"} className='link-to-stock-show'>
                      <div className="row">
                        <div className="row_intro">
                          <h1>AAPL</h1>
                          <p className="row_shares">8,666 Shares</p>
                        </div>
                        <div className="row_chart">
                          <img src="https://raw.githubusercontent.com/dingtianding/Underhood/2835a8cebadffeff0d5614262e56b827367eab9e/app/assets/images/stock.svg" height={16}/>
                        </div>
                        <div className="row_numbers">
                          <p className="row_price">166.42</p>
                          <p className="row_percentage">-1.47%</p>
                        </div>
                      </div>
                    </Link>
                    <Link to={`/assets/TSLA`} key={"TSLA"} className='link-to-stock-show'>
                      <div className="row">
                        <div className="row_intro">
                          <h1>TSLA</h1>
                          <p className="row_shares">100 Shares</p>
                        </div>
                        <div className="row_chart">
                          <img src="https://raw.githubusercontent.com/dingtianding/Underhood/2835a8cebadffeff0d5614262e56b827367eab9e/app/assets/images/stock.svg" height={16}/>
                        </div>
                        <div className="row_numbers">
                          <p className="row_price">1008.3</p>
                          <p className="row_percentage">-6.14%</p>
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