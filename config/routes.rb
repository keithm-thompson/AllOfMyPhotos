Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :followings, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy]
    resources :albums, only: [:create, :destroy]
    get 'users/:id', to: 'users#show'
    get 'search', to: 'users#search'
    get 'initial_feed', to: 'photos#initial_feed'
    get 'full_feed', to: 'photos#full_feed'
    post 'photos/:id/add_tag', to: 'photos#add_tag_to_photo'
    delete 'photos/:photo_id/tags/:id', to: 'photos#remove_tag_from_photo'
    post 'albums/:album_id/add_photo/:id', to: 'albums#add_photo'
    delete 'albums/:album_id/remove_photo/:id', to: 'albums#remove_photo'
  end
end
