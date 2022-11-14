Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] 
    resource :session, only: [:create, :destroy]
    
    resources :assets, only: [:show]
    resources :users do
      resources :portfolio_transactions, only: [:index]
      resources :watchlists, only: [:index]
    end 
    resources :portfolio_transactions, only: [:create]
    resources :watchlists, only: [:show, :create, :destroy, :update]
    resources :watchlist_assets, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end

