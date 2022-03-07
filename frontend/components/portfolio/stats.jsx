import React, { useState, useEffect} from 'react'
import axios from "axios";
import StatsRow from "./stats_row";

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
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
    
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
          console.log(testData);
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