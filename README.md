# [Underhood](https://aa-underhood.herokuapp.com/#/)

Underhood is a clone of a website version of a popular stock exchange app called Robinhood. Underhood allows users to simulate the buy and sell stocks with real-time data, historical data and additional feature such as creating watchlist and fund management. The app also pulls the latest headline of all major new sources as well as news article related to each individual stock at the stock's show page.

 ## Technologies Used
   * Frontend:
     * React
     * HTML/CSS
   * Backend: 
     * Ruby
     * Javascript
     * AJAX
     * JBuilder
     * Rails
     * Redux
     * PostgreSQL
     * HTML/CSS
   * APIs: 
     * Chart.js / Canvas
     * Finnhub(News)
     * AlphaVantage(Search & Live Price)
   
## Features
  * User signup and login as well as demo user function
  * Portfolio chart performance over time with sidebar of all owned stocks
  * Price chart displaying real time stock prices from a Stock API
  * News section displaying latest current event from a New API
  * Search bar displaying asset search result and navigate to specifc Asset page
  * Asset page displaying real time price chart and latest current event of the specific asset
 
 ## Upcoming Features
   * Add stocks to watchlists
   * Purchase and sell stock in shares or dollars based on live price
   * Stock simulatior game with leaderboard of all the users

## Code snippets

* ![sidebar](https://github.com/dingtianding/Underhood/blob/main/app/assets/images/sidebar.png?raw=true)
* ![graph](https://github.com/dingtianding/Underhood/blob/main/app/assets/images/graph.png)
```javascript
useEffect(() => {
    
    let data = [];
    let value = 1000000;
    for(var i = 0; i < 366; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i-355);
      value += Math.round((Math.random() < 0.2 ? 1 : 0) * Math.random() * 10000);
      data.push({x: date, y: value});
    }   
    setData(data)
  }, []);

  return (
    <div className="linegraph">
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                type: 'line',
                backgroundColor: "black",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#5AC53B',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
  ```
* ![news](https://github.com/dingtianding/Underhood/blob/main/app/assets/images/news.png?raw=true)
```javascript
const CompanyNews = ({ companyNews }) => {
  const news = Object.values(companyNews).map((article, i) => {
    return (
      <CompanyNewsItem
        key={i}
        url={article.url}
        source={article.source}
        headline={article.headline}
        summary={article.summary}
        image={article.image}
      />
    );
  });

  return (
    <div className="news">
      {news.slice(0, 5)}
    </div>
  );
};

const CompanyNewsItem = ({ url, source, headline, summary, image }) => {
  return (
    <div className="company-news-item-container">
      <a href={url} className="company-news-item-link" target="_blank">
        <div className="news_box">
          <h3 className="news_source">{source}</h3>
          <h2 className="news_headline">{headline}</h2>
          <p className="news_summary">
            {summary.split("").slice(0, 75).join("") + "..."}
          </p>
        </div>
        <img
          src={image}
          width="200px"
          height="135px"
          className="news_img"
        />
      </a>
    </div>
  );
};
 ```



