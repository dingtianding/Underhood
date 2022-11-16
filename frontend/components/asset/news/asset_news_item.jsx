import React from "react";

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

export default CompanyNewsItem;
