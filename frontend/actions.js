//CbJdPWJ4J2aX6WkZJ5ogPQ
//vvbEd5df6HutBxG1xR3CDnuE1Rf5e6YXCXgPqL36Km1V79Hb9Lu0JTTcmIgCZHw4

//token:  DT1IujsV-xgVzZ5ubs9G7SJhC2PBVxdSibJpcHen3RSTPXSvoXOX8cYfSZW5TEKgbCnw0O9xAcxN9d6B_av3C9zm-dLCb4RVyFlcwWDYIkd8z6d7NjjctWFvoOiMWXYx
export const fetchRestaurants = city => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.yelp.com/v3/transactions/delivery/search?latitude=37.786882&longitude=-122.399972',

    xhrFields: {
      withCredentials: true
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization','Bearer DT1IujsV-xgVzZ5ubs9G7SJhC2PBVxdSibJpcHen3RSTPXSvoXOX8cYfSZW5TEKgbCnw0O9xAcxN9d6B_av3C9zm-dLCb4RVyFlcwWDYIkd8z6d7NjjctWFvoOiMWXYx')
    }
  });
}


export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});
