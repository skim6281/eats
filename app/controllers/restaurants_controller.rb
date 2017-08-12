class RestaurantsController < ApplicationController
  def show
    restaurant = Restaurant.new
    @restaurants = restaurant.search(params[:city])
    render 'restaurants/show'
  end
end
