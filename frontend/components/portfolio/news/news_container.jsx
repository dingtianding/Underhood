import React, { useContext } from "react";
import { NewsContext } from "./news_api";
import NewsArticle from "./news_article";

function News(props) {
  const { data } = useContext(NewsContext);


  return (
    <div>
      <div className="news_list">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;