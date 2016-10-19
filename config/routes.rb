Rails.application.routes.draw do
  devise_for :users

  root 'static_pages#index'
  resources :chat_rooms, only: [:new, :create, :show, :index]
  resources :chat_room_requests, only: :create
  resources :users, only: :show  
  
  mount ActionCable.server => '/cable'
end
