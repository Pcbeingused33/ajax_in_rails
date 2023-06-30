Rails.application.routes.draw do
  root to: "pages#home"
    Rails.application.routes.draw do
      resources :restaurants, only: [:index, :show]
    end
  end
