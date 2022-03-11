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
   
## Features
  * User signup and login as well as demo user function
  * Portfolio chart performance over time with sidebar of all owned stocks
  * Stock chart displaying real time stock prices from a Stock API
  * News section displaying latest current event from a New API
 
 ## Upcoming Features
   * Search bar and Stock pages with stock data from API
   * Purchase and sell stock in shares or dollars
   * Add stocks to watchlists
   * Stock games with Leaderboard

## Code snippets

* ![sidebar](https://github.com/dingtianding/Underhood/blob/main/app/assets/images/sidebar.png?raw=true)
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
* ![news](https://github.com/dingtianding/Underhood/blob/main/app/assets/images/news.png?raw=true)
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "9803bf19a56d4f2784a06878e6855667";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
   



