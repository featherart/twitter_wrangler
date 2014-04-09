TweetWrangler::Application.routes.draw do
  scope :api do
    resources :tweets, defaults: {format: :json}
  end
  root 'tweetlist#index'  

  post 'tweets/create'
end