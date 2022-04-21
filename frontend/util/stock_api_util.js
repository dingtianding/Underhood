export const fetchCompanyNews = (
  stockSymbol,
  APIKey,
  fromDate,
  toDate
) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${stockSymbol}&from=${fromDate}&to=${toDate}&token=${APIKey}`,
  });

export const fetchAllMarketNews = (APIKey) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/news?category=general&token=${APIKey}`,
  });


