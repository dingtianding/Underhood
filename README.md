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
     * Chart.js
     * Finnhub(News)
     * AlphaVantage(Search & Live Price)
   * Other: 
     * Amazon AWS S3
     * Heroku
   
## Features
  * User signup and login as well as a demo user function
    * ![Login](https://user-images.githubusercontent.com/83096156/202591294-a4081074-75a2-4b97-8625-5911d8df0a67.gif)
    * ![Demo User](https://user-images.githubusercontent.com/83096156/202591397-beefd5bd-1023-4ab2-b8c1-3f48195d2e76.gif)


  * Portoflio page with sidebar of all owned stocks and watchlists
    * ![Portfolio](https://user-images.githubusercontent.com/83096156/202591698-ba5e4c24-6181-4f77-9f52-3e945b29403d.gif)
  * Buying power that limits user from stock purchase and ability to add to that balance.
    * ![Buying Power](https://user-images.githubusercontent.com/83096156/202591750-9240f395-1315-4b69-9982-38aa2458e30b.gif)
  * News section displaying latest current event from a New API
    * ![News](https://user-images.githubusercontent.com/83096156/202591776-6ca9225f-6985-4824-8dd5-d53b82930417.gif)
  * Stock page displaying real time price chart and latest current event of the specific asset
    * ![stock](https://user-images.githubusercontent.com/83096156/202591769-562a98b1-48c2-4738-8021-dffe1718861d.gif)
  * Purchase and sell stock in shares or dollars based on live price
    * ![transaction](https://user-images.githubusercontent.com/83096156/202591764-40de8c06-1c56-459b-9c37-6a8cbfc2851e.gif)
  * Create multiple watchlist and add stocks to those watchlists
    * ![watchlist](https://user-images.githubusercontent.com/82133627/152613031-2c5d90fe-4068-4c62-8563-2b1557c1f5a4.gif)
  * Search bar with stock symbols and names from API
    * ![search](https://user-images.githubusercontent.com/83096156/202592199-8f2ba24d-b272-4dae-ac8c-4bc0dc548683.gif)
 

 ## Future Features
  * A leaderboard of all the users's net worth and rules for a stock simulatior game


## Code snippets

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



