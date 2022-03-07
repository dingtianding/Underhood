import React from "react";

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
// (currentPrice - openPrice)/openPrice
//   const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

//   const getModal = () => {

//   }
  return (
    <div className="row">
      <div className="row_intro">
        <h1>AAPL</h1>
        <p className="row_shares">200 Shares</p>
      </div>
      <div className="row_chart">
        {/* <img src={StockChart} height={16}/> */}
      </div>
      <div className="row_numbers">
        <p className="row_price">200</p>
        <p className="row_percentage"> +100%</p>
      </div>
    </div>
  );
}

export default StatsRow;
