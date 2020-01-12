import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import middleware from "./middleware";
import watcherSaga from "./sagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(middleware, initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(watcherSaga);

export default store;
