json.array!(@restaurants['businesses']) do |restaurant|
  json.rating restaurant['rating']
  json.price restaurant['price']
  json.name restaurant['name']
  json.url restaurant['url']
end
