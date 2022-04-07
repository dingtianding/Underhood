import React, { useState, useEffect } from "react";
import { fetchAllMarketNewsAPI } from "../../../utils/stock_api_util";

import LineGraph from './line_graph'
import TimeLine from './timeline'
import CompanyNews from "./company_news";


function Newsfeed () {
    const [companyNews, setCompanyNews] = useState([]);
    const APIKey = "c8it1riad3ibm5ej5gu0";

    useEffect(() => {
        fetchAllMarketNewsAPI(APIKey).then((res) =>
          setCompanyNews(res)
        );
        return () => {
          setCompanyNews([]);
        };
      }, []);

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

                        
                        <div className="newsfeed_news">
                            <div className="newsfeed_news_box">
                                <h1>News</h1>
                                    
                            </div>
                            <div>
                                <CompanyNews companyNews={companyNews} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;