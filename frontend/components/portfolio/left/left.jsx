import React, { useState, useEffect } from "react";
import { fetchAllMarketNews } from "../../../util/news_api_util";

import LineGraph from './chart/line_graph'
import TimeLine from './chart/timeline'
import CompanyNews from "./news/news";


function Newsfeed () {
    const [companyNews, setCompanyNews] = useState([]);
    const APIKey = "c8it1riad3ibm5ej5gu0";

    useEffect(() => {
        fetchAllMarketNews(APIKey).then((res) =>
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
                                <button> <span id="a">Invite friends</span><span id="b">No friends avaliable :(</span></button>
                            </div>
                        </div>

                        <section className="dashboard-list">
                        <div className="dashboard-list-1">
                          <div className="dashboard-list-2">
                            <header className="dashboard-list-3">
                              <span className="dashboard-list-4">
                                Popular Lists
                              </span>
                            </header>
                            <div className="dashboard-list-items">
                              <div className="dashboard-list-items-1">
                                <div className="dashboard-list-items-2">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/crypto/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Crypto</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-1">
                                <div className="dashboard-list-items-2-2">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">100 Most Popular</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-2">
                                <div className="dashboard-list-items-2-3">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/daily_movers/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Daily Movers</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-3">
                                <div className="dashboard-list-items-2-4">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/cannabis/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Cannabis</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-4">
                                <div className="dashboard-list-items-2-5">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/bitcoin_family/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Bitcoin Family</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-5">
                                <div className="dashboard-list-items-2-6">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/index_etfs/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Index ETFs</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-6">
                                <div className="dashboard-list-items-2-6">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/altcoins/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Altcoins</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-7">
                                <div className="dashboard-list-items-2-8">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/upcoming_earnings/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Upcoming Earnings</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-8">
                                <div className="dashboard-list-items-2-9">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/tech_media_telecom/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Tech, Media, & Telecom</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-9">
                                <div className="dashboard-list-items-2-10">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/energy/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Energy</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-10">
                                <div className="dashboard-list-items-2-11">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/pharma/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Pharma</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-11">
                                <div className="dashboard-list-items-2-12">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/technology/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Technology</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-12">
                                <div className="dashboard-list-items-2-13">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/real_estate/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Real Estate</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-13">
                                <div className="dashboard-list-items-2-14">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/healthcare/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Healthcare</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-14">
                                <div className="dashboard-list-items-2-15">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/food_drink/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Food & Drink</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-15">
                                <div className="dashboard-list-items-2-16">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/banking/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Banking</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-16">
                                <div className="dashboard-list-items-2-17">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/energy_water/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Energy & Water</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-17">
                                <div className="dashboard-list-items-2-18">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/china/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">China</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-18">
                                <div className="dashboard-list-items-2-19">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/software/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="dashboard-list-items-4">Software</span>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </section>

                        
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