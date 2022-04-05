import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <span className="news_source">{data.source.name}</span>
      <span className="news_published">{data.publishedAt.substr(11,12)}</span>
      <h1 className="news_title">{data.title}</h1>
      <p className="news_desc">{data.description}</p>
    </div>
  );
}

export default NewsArticle;