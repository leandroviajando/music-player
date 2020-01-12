import { takeEvery, call, put } from "redux-saga/effects";
import { Action } from "../interfaces";
import {
  SET_SEARCH_RESULTS,
  SET_SEARCH_RESULTS_SUCCESS,
  SET_SEARCH_RESULTS_FAILURE
} from "./action-types";
import { serialise } from "../utils";

export default function* watcherSaga() {
  yield takeEvery(SET_SEARCH_RESULTS, apiWorkerSaga);
}

function* apiWorkerSaga(action: Action<string>) {
  try {
    const response = yield call(getData, action.payload);
    yield put({ type: SET_SEARCH_RESULTS_SUCCESS, payload: response.results });
  } catch (error) {
    yield put({ type: SET_SEARCH_RESULTS_FAILURE, payload: error.message });
  }
}
function getData(searchTerm: string) {
  return fetch(
    `https://itunes.apple.com/search?term=${searchTerm}`
  ).then(response => response.json());
}
