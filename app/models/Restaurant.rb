class Restaurant
  include HTTPParty
  CLIENT_ID = ENV['client_id']
  CLIENT_SECRET = ENV['client_secret']
  API_HOST = "https://api.yelp.com"
  TOKEN_PATH = "/oauth2/token"
  SEARCH_PATH = "/v3/businesses/search"
  GRANT_TYPE = "client_credentials"
  SEARCH_LIMIT = 20

  def bearer_token
    url = "#{BASE_SEARCH_URL}#{TOKEN_PATH}"
  end
end
