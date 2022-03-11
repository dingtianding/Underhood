Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:create, :destroy, :index]
  end
  root to: 'static_pages#root'
end

