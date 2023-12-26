import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import middlewares from "./middlewares";
import watcherSaga from "./middlewares/sagas";
import reducers from "./reducers";

const sagas = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  // @ts-ignore
  middleware: (() => [middlewares, sagas]),
});

sagas.run(watcherSaga);

export default store;
