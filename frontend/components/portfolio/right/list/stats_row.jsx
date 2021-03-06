import React from "react";
import { Link } from 'react-router-dom';


function StatsRow(props) {
    const percentage = (props.price-props.openPrice)/props.openPrice * 100.00
  return (
    <Link to={`/assets/${props.name}`} key={props.namec} className='link-to-stock-show'>
      <div className="row">
        <div className="row_intro">
          <h1>{props.name}</h1>
          <p className="row_shares">{props.shares && (props.shares = "shares")}</p>
        </div>
        <div className="row_chart">
          <img src="https://raw.githubusercontent.com/dingtianding/Underhood/2835a8cebadffeff0d5614262e56b827367eab9e/app/assets/images/stock.svg" height={16}/>
        </div>
        <div className="row_numbers">
          <p className="row_price">{props.price}</p>
          <p className="row_percentage">{Number(percentage).toFixed(2)}%</p>
        </div>
      </div>
    </Link>

  );
}

export default StatsRow;
