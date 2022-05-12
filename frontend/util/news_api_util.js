export const fetchStockNews = (symbol, start, end) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/company-news?symbol=${symbol.toUpperCase()}&from=${start}&to=${end}&token=${window.finnhubAPIKey}`
  })
}

export const fetchAllMarketNews = (APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/news?category=general&token=${APIKey}`,
  });


