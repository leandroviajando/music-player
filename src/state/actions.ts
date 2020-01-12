import actionTypeConstants from "./action-type-constants";

export function updateSearchResults(payload: any[]) {
  return { type: actionTypeConstants.UPDATE_SEARCH_RESULTS, payload };
}
