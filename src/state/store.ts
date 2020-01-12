import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { setSearchResultsMiddleware } from "./middlewares";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "./sagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(setSearchResultsMiddleware, initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(watcherSaga);

export default store;
