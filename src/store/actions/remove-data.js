export const REMOVE_DATA = 'REMOVE_DATA';

export default function removeData (task) {
  return {
    type: REMOVE_DATA,
    payload: {task},
  }
};


