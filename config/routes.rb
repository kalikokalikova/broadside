Rails.application.routes.draw do

  root 'pages#index'
  
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    namespace :v1 do
      resources :flyers
      resources :comments
      get '/current_user', to: 'current_user#index'
    end
  end

end
