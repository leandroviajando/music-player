import { getSearchResultsWorkerSaga } from "./sagas";
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  RESET_SEARCH_RESULTS
} from "../actions/types";
import { getMockSearchTerm, getMockReduxFunctions } from "../../utils/mocks";
import { Dispatch } from "redux";
import { State, Action } from "../../interfaces";
import middleware from "../middlewares";

describe("Middlewares test suite", () => {
  const { dispatchMock, nextMock } = getMockReduxFunctions();

  test("middleware catches a GET_SEARCH_RESULTS call with an empty search term", () => {
    middleware({ dispatch: dispatchMock })(nextMock)({
      type: GET_SEARCH_RESULTS,
      payload: ""
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: RESET_SEARCH_RESULTS,
      payload: []
    });
  });

  test.todo(
    "getSearchResultsWorkerSaga returns GET_SEARCH_RESULTS_SUCCESS action with search results as payload"
    // , async () => {
    // const generator: any = await getSearchResultsWorkerSaga({
    //   type: GET_SEARCH_RESULTS,
    //   payload: getMockSearchTerm()
    // });
    // console.log(await generator.next().value);
    // console.log(generator.next().value);
    // expect(actionResponse).not.toBe(undefined);
    // expect(actionResponse.type).toBe(GET_SEARCH_RESULTS_SUCCESS);
    // expect(Array.isArray(actionResponse.payload)).toBe(true);
    // }
  );
});
