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
    tweets = Tweet.tweet_fetch(params[:username])
    
    # not sure how to handle multiple tweets
    # for now create one
    respond_with Tweet.create(username: params[:username], text: tweets.first.text)
    
  end

  def destroy
    respond_with Tweet.destroy(params[:id])
  end

  private
    def tweet_params
      params.require(:tweet).permit(:username, :text)
    end
end