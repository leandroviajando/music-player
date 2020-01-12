import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import middleware from "./middleware";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "./sagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(middleware, initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(watcherSaga);

export default store;
