import React from 'react'
import LineGraph from '../line_graph'
import TimeLine from '../timeline'
import { NewsContextProvider } from "./news_api";
import News from "./news_container";

function Newsfeed (){
    return (
        <div className="newsfeed">
            <div className="newsfeed_container">
                <div className="newsfeed_chartSection">
                    <div className="newsfeed_portfolio">

                        <div className="newsfeed_chart_header">
                            <h1 className="port_value">$1,363,440.63</h1>
                            <p className="port_change">+ 363,440.63 (+36.34%)</p>
                            <p className="port_timeline">Past Year</p>
                        </div>

                        <div className="newsfeed_chart">
                            <LineGraph  />
                            <TimeLine />
                        </div>

                        <div className="newsfeed_buyingpower">
                            <h2> Buying Power</h2>
                            <h2> $2,420</h2>
                        </div>

                        <div className="newsfeed_notices">
                            <div className="newsfeed_notices_box">
                                <p> New Free Stock Program!</p>
                                <h1> Refer a friend. Pick fractional shares of stocks like Apple, Microsoft, or Alphabet! Limitations apply. </h1>
                                <button>Invite friends</button>
                            </div>
                        </div>

                        <div className="newsfeed_trending">
                            <div className="newsfeed_trending_box">
                                <h1>Trending lists</h1>
                                <button>Show More</button>
                            </div>
                        </div>

                        <div className="newsfeed_trending">
                            <div className="newsfeed_trending_box">
                                <h1>Learn</h1>
                            </div>
                        </div>
                        
                        <div className="newsfeed_news">
                            <div className="newsfeed_news_box">
                                <h1>News</h1>
                                    
                            </div>
                            <div>
                                <NewsContextProvider>
                                        <News />
                                </NewsContextProvider>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;