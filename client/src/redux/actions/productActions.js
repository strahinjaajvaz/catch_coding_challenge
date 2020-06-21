export const INITIALISE = "@@REDUX/INITIALIZE";
export const CHANGE_SORT = "@@REDUX/CHANGE_SORT";

export function initialize(payload) {
  return {
    type: INITIALISE,
    payload,
  };
}

export function changeSort(event) {
  return {
    type: CHANGE_SORT,
    payload: event.target.value,
  };
}
