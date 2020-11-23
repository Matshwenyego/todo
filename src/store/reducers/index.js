import { combineReducers } from 'redux';
import FETCH_DATA from '../actions/fetch-data';
import REMOVE_DATA from '../actions/remove-data';
import ADD_DATA from '../actions/add-data'
  
const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA:
            return Object.assign({}, state, {
                ...state, 
                ...action.payload.tasks, 
            });
        case REMOVE_DATA:
            return Object.assign([], ...state.tasks.filter(ta => ta.id !== action.payload.task.id))
        case ADD_DATA:
            return Object.assign({}, state, {
                ...state, 
                ...action.payload.tasks, 
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({tasks});

export default rootReducer;