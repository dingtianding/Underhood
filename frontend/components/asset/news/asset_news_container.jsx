import React, { useState, useEffect } from "react";
import { fetchAssetNews } from "../../../util/news_api_util";

import AssetNews from './asset_news'

function AssetNewsContainer({ symbol }) {
  const [assetNews, setAssetNews] = useState([]);


  const today = new Date()
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 5)


  useEffect(() => {
    fetchAssetNews(symbol, yesterday.toISOString().split('T')[0], today.toISOString().split('T')[0])
      .then((res) => {
        console.log('response', res)
        setAssetNews(res)
      }
      );
    return () => {
      setAssetNews([]);
    };
  }, []);

  return (
    <div>
      <AssetNews assetNews={assetNews} />
    </div>
  )
}

export default AssetNewsContainer;