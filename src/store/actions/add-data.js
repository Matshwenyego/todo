export const ADD_DATA = 'ADD_DATA';

export default function addData (tasks) {
  return {
    type: ADD_DATA,
    payload: {tasks},
  }
};



