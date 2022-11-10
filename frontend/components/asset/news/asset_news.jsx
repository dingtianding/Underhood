import React from "react";
import AssetNewsItem from "./asset_news_item";

const AssetNews = ({ assetNews }) => {
  const news = Object.values(assetNews).map((article, i) => {
    return (
      <AssetNewsItem
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
export default AssetNews;
