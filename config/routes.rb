Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      resources :routes, only: [:create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :bars, only: [:index, :show]
  end

end
