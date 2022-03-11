import React from 'react';

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2
})


class StockShow extends React.Component {
  render() {
    return (
      <div id="stock-show-page">Show
       


      </div>
    )
  }

}

export default StockShow

