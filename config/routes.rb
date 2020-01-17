Rails.application.routes.draw do
  root "home#index"

  resources :home, only: [:index]

  namespace :api do
    namespace :v1 do
    end
  end
end
