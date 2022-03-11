import React from "react";
import StockChart from '../../../app/assets/images/stock.svg'

function StatsRow(props) {
    const percentage = (props.price-props.openPrice)/props.openPrice * 100.00
  return (
    <div className="row">
      <div className="row_intro">
        <h1>{props.name}</h1>
        <p className="row_shares">{props.shares && (props.shares = "shares")}</p>
      </div>
      <div className="row_chart">
        <img src={StockChart} height={16}/>
      </div>
      <div className="row_numbers">
        <p className="row_price">{props.price}</p>
        <p className="row_percentage">{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
