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
     * Material UI
   
## Features
  * User signup and login as well as a demo user function
  ![Login_DemoUser](https://user-images.githubusercontent.com/83096156/202593002-36fd3126-6af3-4015-90c9-e09bcb811e66.gif)
  * Portoflio page with sidebar of all owned stocks and watchlists
  ![Portfolio](https://user-images.githubusercontent.com/83096156/202591698-ba5e4c24-6181-4f77-9f52-3e945b29403d.gif)
  * Buying power that limits user from stock purchase and the ability to add to that balance.
  ![Buying Power](https://user-images.githubusercontent.com/83096156/202591750-9240f395-1315-4b69-9982-38aa2458e30b.gif)
  * News section displaying latest current event from a New API
  ![News](https://user-images.githubusercontent.com/83096156/202591776-6ca9225f-6985-4824-8dd5-d53b82930417.gif)
  * Stock page displaying real time price chart and latest current event of the specific asset
  ![stock](https://user-images.githubusercontent.com/83096156/202591769-562a98b1-48c2-4738-8021-dffe1718861d.gif)
  * Purchase and sell stock in shares or dollars based on live price
  ![transaction](https://user-images.githubusercontent.com/83096156/202591764-40de8c06-1c56-459b-9c37-6a8cbfc2851e.gif)
  * Create multiple watchlist and add stocks to those watchlists
  ![watchlist](https://user-images.githubusercontent.com/82133627/152613031-2c5d90fe-4068-4c62-8563-2b1557c1f5a4.gif)
  * Search bar with stock symbols and names from API
  ![search](https://user-images.githubusercontent.com/82133627/152612673-4db83667-310b-466b-b70f-4324ddb3b591.gif)

 ## Future Features
  * Portfolio Chart on portolio page
  * More details on the stock pages(Market Value, Cost, Stats on the stock(market cap, 52 day high/low etc))
  * A leaderboard of all the users's net worth and rules for a stock simulatior game
  * Responsiveness on mobile clients

## Code snippets

* Originaly each change to the search bar would fire off an API call. With the limit of 5 API calls per minute, this limit was quickly exceed. A debounce function was added to reduce API pulls. With the debounce function, the call to the API only occurs if the user stops typing for 1 second.
```javascript
  debounceSearch() {
    let timer;
    return (keyword) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        Promise.all([this.props.fetchSearch(keyword)])
          .then(() => {
            this.setState({ results: this.props.results[keyword] || [] })
          })
      }, 1000);
    }
  }

  handleSearch(e) {
    const keyword = e.currentTarget.value;
    if (!keyword) {
      this.setState({ keyword: '', results: '' });
    } else {
      this.setState({ keyword: keyword }, 
        this.debounceSearch(keyword)
        )
    }
  }
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



