TweetWrangler::Application.routes.draw do
  scope :api do
    resources :tweets, only: [:index], defaults: {format: :json}
  end
  root 'tweetlist#index'  
end