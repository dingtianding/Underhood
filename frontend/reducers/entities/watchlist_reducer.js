import { 
  RECEIVE_WATCHLISTS, 
  RECEIVE_WATCHLIST, 
  DELETE_WATCHLIST, 
  RECEIVE_WATCHLIST_ASSET, 
  DELETE_WATCHLIST_ASSET
} 
from '../../actions/watchlist_actions';


const watchlistReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_WATCHLISTS:
      return action.watchlists;
    case RECEIVE_WATCHLIST:
      nextState[action.watchlist.id] = action.watchlist;
      return nextState;
    case DELETE_WATCHLIST:
      delete nextState[action.watchlistId];
      return nextState;
    case RECEIVE_WATCHLIST_ASSET:
      nextState[action.asset.watchlistId]['assets'][action.asset.id] = {symbol: action.asset.symbol, id: action.asset.id};
      return nextState;
    case DELETE_WATCHLIST_ASSET:  
      delete nextState[action.watchlistId]['assets'][action.assetId];
      return nextState;
    default:
      return state;
  }
}

export default watchlistReducer;