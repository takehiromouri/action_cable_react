Rails.application.routes.draw do
  devise_for :users

  root 'chat_rooms#index'
  resources :chat_rooms, only: [:new, :create, :show, :index]
  resources :chat_room_requests, only: :create
  
  
  mount ActionCable.server => '/cable'
end
