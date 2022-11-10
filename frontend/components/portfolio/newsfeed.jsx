import React, { useState, useEffect } from "react";
import { fetchAllMarketNews } from "../../util/news_api_util";

import CompanyNews from "./news/news";
import PopularList from "./list/popular_list";



function NewsFeed () {
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
        <div>
            <div>
                <PopularList />
            </div>
                        
            <div className="left_news">
                <div className="left_news_box">
                    <h1>News</h1>      
                </div>
                
                <div>
                    <CompanyNews companyNews={companyNews} />
                </div>
            </div>
    </div>
    )
}

export default NewsFeed;
