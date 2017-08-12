export const fetchRestaurants = city => {
  return $.ajax({
    method: 'GET',
    url: `/restaurants/${city}`,
  });
};
