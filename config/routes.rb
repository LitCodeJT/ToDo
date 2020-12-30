Rails.application.routes.draw do

  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
     resources :todo, only: [:index, :create, :destroy, :update]
    end 
  end 
end
