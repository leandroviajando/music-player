import { takeEvery, call, put } from "redux-saga/effects";
import { Action } from "../interfaces";
import {
  SET_SEARCH_RESULTS,
  SEARCH_RESULTS_LOADED,
  SEARCH_RESULTS_API_ERRORED
} from "./action-types";

export default function* watcherSaga() {
  yield takeEvery(SET_SEARCH_RESULTS, apiWorkerSaga);
}

function* apiWorkerSaga(action: Action<string>) {
  try {
    const response = yield call(getData, action.payload);
    yield put({ type: SEARCH_RESULTS_LOADED, payload: response.results });
  } catch (error) {
    yield put({ type: SEARCH_RESULTS_API_ERRORED, payload: error });
  }
}
function getData(searchTerm: string) {
  return fetch(
    `https://itunes.apple.com/search?term=${searchTerm}`
  ).then(response => response.json());
}
