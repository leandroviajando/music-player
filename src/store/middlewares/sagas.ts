import { takeEvery, call, put } from "redux-saga/effects";
import { Action } from "../../interfaces";
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_FAILURE
} from "../actions/types";
import { getData, serialise } from "../../utils";

export default function* watcherSaga() {
  yield takeEvery(GET_SEARCH_RESULTS, getSearchResultsWorkerSaga);
}

export function* getSearchResultsWorkerSaga(action: Action<string>) {
  try {
    const response = yield call(getData, action.payload);
    const searchResults = yield call(serialise, response.results);
    yield put({
      type: GET_SEARCH_RESULTS_SUCCESS,
      payload: searchResults
    });
  } catch (error) {
    yield put({
      type: GET_SEARCH_RESULTS_FAILURE,
      payload: error.message ? error.message : error
    });
  }
}
