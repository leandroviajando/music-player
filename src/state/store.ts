import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import middleware from "./middlewares";
import watcherSaga from "./middlewares/sagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(middleware, initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(watcherSaga);

export default store;
