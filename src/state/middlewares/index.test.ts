import { getSearchResultsWorkerSaga } from "./sagas";
import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS
} from "../actions/types";
import { getMockSearchTerm } from "../../utils/mocks";

describe("Middlewares test suite", () => {
  test.todo(
    "middleware catches a GET_SEARCH_RESULTS call with an empty search term"
  );
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
