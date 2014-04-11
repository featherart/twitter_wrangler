class TweetsController < ApplicationController
  respond_to :json

  def index
    puts "$$$$$$$$$$$$$$$$$$$$$$$$"
    p params
    puts "***********************"
    respond_with Tweet.all
  end

  def create
    puts "$$$$$$$$$$$$$$$$$$$$$$$$"
    p params
    puts "***********************"
    #respond_with Tweet.create(tweet_params)
    respond_with TweetFetcher.tweet_fetch(params[:username])
  end

  def destroy
    respond_with Tweet.destroy(params[:id])
  end

  private
    def tweet_params
      params.require(:tweet).permit(:username, :text)
    end
end