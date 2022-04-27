import { combineReducers } from "redux";
import assetErrorsReducer from "./asset_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  asset: assetErrorsReducer
})

export default errorsReducer;