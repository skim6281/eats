import { RECEIVE_RESTAURANTS } from './actions';

const initialState = [];

const Reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};

export default Reducer;
