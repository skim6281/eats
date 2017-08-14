import * as APIUtil from './api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const sortByRating = () => ({
  type: SORT_BY_RATING
});

export const sortByPrice = () => ({
  type: SORT_BY_PRICE
});

export const fetchRestaurants = city => dispatch => {
  return APIUtil.fetchRestaurants(city)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
};
