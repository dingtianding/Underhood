import * as StockAPIUtil from '../util/news_api_util'

export const RECEIVE_ASSET_NEWS = 'RECEIVE_ASSET_NEWS'
export const RECEIVE_MARKET_NEWS = 'RECEIVE_MARKET_NEWS'


export const receiveAssetNews = (news, symbol) => ({
  type: RECEIVE_ASSET_NEWS,
  news,
  symbol
})

export const receiveMarketNews = news => ({
  type: RECEIVE_MARKET_NEWS,
  news
})

export const fetchAssetNews = (symbol, start, end) => dispatch => (
  StockAPIUtil.fetchAssetNews(symbol, start, end).then((asset) => dispatch(receiveAssetNews(asset, symbol)))
)

export const fetchAllMarketNews = () => dispatch => (
  StockAPIUtil.fetchAllMarketNews().then(news => dispatch(receiveMarketNews(news)))
)
