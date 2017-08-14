import {
  RECEIVE_RESTAURANTS,
  SORT_BY_RATING,
  SORT_BY_PRICE } from './actions';

const initialState = [];

const Reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case SORT_BY_RATING:
      const restaurantsByRating = state.slice();
      restaurantsByRating.sort((a,b) => (
        a.rating - b.rating
      ));
      return restaurantsByRating;
    case SORT_BY_PRICE:
      const restaurantsByPrice = state.slice();
      restaurantsByPrice.sort((a,b) => {
        if(!a.price && b.price) {
          return -1;
        } else if (!b.price && a.price) {
          return 1;
        } else if (!a.price && !b.price) {
          return 0;
        } else {
          return a.price.length - b.price.length;
        }
      });
      return restaurantsByPrice;
    default:
      return state;
  }
};

export default Reducer;
