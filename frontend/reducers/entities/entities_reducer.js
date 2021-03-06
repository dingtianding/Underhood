import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
// import transactionReducer from "./transaction_reducer";
import assetReducer from "./asset_reducer";
// import watchlistReducer from "./watchlist_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  assets: assetReducer,
  // transactions: transactionReducer,
  // watchlist: watchlistReducer,
  search: searchReducer
})

export default entitiesReducer;