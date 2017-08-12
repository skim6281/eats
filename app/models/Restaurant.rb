class Restaurant
  include HTTPParty
  CLIENT_ID = ENV['client_id']
  CLIENT_SECRET = ENV['client_secret']
  API_HOST = "https://api.yelp.com".freeze
  TOKEN_PATH = "/oauth2/token".freeze
  SEARCH_PATH = "/v3/businesses/search".freeze
  GRANT_TYPE = "client_credentials".freeze
  SEARCH_LIMIT = 20

  def bearer_token
    url = "#{API_HOST}#{TOKEN_PATH}"

    raise "Please set your CLIENT_ID" if CLIENT_ID.nil?
    raise "Please set your CLIENT_SECRET" if CLIENT_SECRET.nil?

    params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: GRANT_TYPE
    }

    response = HTPP.post(url, params: params)
    parsed = response.parse
    "#{parsed['token_type']} #{parsed['access_token']}"
  end

  def search(city)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      location: city,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth(bearer_token).get(url, params: params)
    response.parse
  end
end
