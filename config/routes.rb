Rails.application.routes.draw do
  root "static_pages#root"

  resources :restaurants, defaults: {format: :json}, param: :city, only: [:show]
end
