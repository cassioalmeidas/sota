Rails.application.routes.draw do
  resources :researches
  devise_for :users
  root to: 'welcome#index'
end
