import { call, put, takeEvery } from "redux-saga/effects";
import { Action, SearchResult } from "../../interfaces";
import { getData, serialise } from "../../utils";
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_FAILURE,
  GET_SEARCH_RESULTS_SUCCESS
} from "../actions/types";

export default function* watcherSaga() {
  yield takeEvery(GET_SEARCH_RESULTS, getSearchResultsWorkerSaga);
}

export function* getSearchResultsWorkerSaga(action: Action<string>) {
  try {
    const response: { results: SearchResult[]} = yield call(getData, action.payload);
    const searchResults: SearchResult[] = yield call(serialise, response.results);
    yield put({
      type: GET_SEARCH_RESULTS_SUCCESS,
      payload: searchResults
    });
  } catch (error) {
    yield put({
      type: GET_SEARCH_RESULTS_FAILURE,
      payload: error instanceof Error && error.message ? error.message : error
    });
  }
}
