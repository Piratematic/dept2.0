Rails.application.routes.draw do
  namespace :api do
    resources :dept
  end
end
