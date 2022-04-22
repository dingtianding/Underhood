// export const fetchAssetPrice = (symbol, key) => {
//   return $.ajax({
//     method: 'GET', 
//     url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${window.alphaAPIKey}`
//   })
// }

export const fetchAssetDetails = (symbol) => {
  return $.ajax({
    method: 'GET', 
    url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${window.alphaAPIKey}`
  })
}

export const fetchAssetInterval = (symbol, interval='5min') => {
  return $.ajax({
    method: 'GET', 
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${window.alphaAPIKey}`
  })
}

export const fetchAssetDaily = (symbol) => {
  return $.ajax({
    method: 'GET', 
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${window.alphaAPIKey}`
  })
}
export const fetchAssetFull = (symbol) => {
  return $.ajax({
    method: 'GET', 
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${window.alphaAPIKey}`
  })
}



