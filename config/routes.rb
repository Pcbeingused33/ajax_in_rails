Rails.application.routes.draw do
  root to: "pages#home"
  resources :restaurants, only: [:index, :show] do
    resources :review, only: :create
  end
end
