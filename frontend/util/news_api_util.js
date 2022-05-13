export const fetchAssetNews = (symbol, start, end) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${start}&to=${end}&token=${APIKey}`
  })
}

export const fetchAllMarketNews = (APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/news?category=general&token=${APIKey}`,
  });

const APIKey = "c8it1riad3ibm5ej5gu0";


