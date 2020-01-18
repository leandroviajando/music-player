import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import middlewares from "./middlewares";
import watcherSaga from "./middlewares/sagas";

const sagas = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(applyMiddleware(middlewares, sagas))
);

sagas.run(watcherSaga);

export default store;
