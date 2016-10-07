Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :followings, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy]
    get 'photos/:id', to: 'photos#index'
    get 'feed', to: 'photos#feed'
    get 'search', to: 'users#search'
  end
end
