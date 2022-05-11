import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducers";
import logger from "./middleware/logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

