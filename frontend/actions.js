import * as APIUtil from './api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const fetchRestaurants = city => dispatch => {
  return APIUtil.fetchRestaurants(city)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
};
