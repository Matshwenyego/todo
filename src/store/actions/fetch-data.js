export const FETCH_DATA = 'FETCH_DATA';

export default function fetchData (tasks) {
  return {
    type: FETCH_DATA,
    payload: {tasks},
  }
};



