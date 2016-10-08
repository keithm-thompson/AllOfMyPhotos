Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :followings, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy]
    get 'user/:id', to: 'users#show'
    get 'search', to: 'users#search'
    get 'initial_feed', to: 'photos#initial_feed'
    get 'full_feed', to: 'photos#full_feed'
  end
end
