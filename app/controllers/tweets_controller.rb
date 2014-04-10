class TweetsController < ApplicationController
  respond_to :json

  def index
    puts "$$$$$$$$TweetsController"
    p params
    puts "***********************"
    respond_with Tweet.all
  end

  def create
    puts "$$$$$$$$TweetsController"
    p params
    puts "***********************"
    respond_with Tweet.create(tweet_params)
  end

  def destroy
    respond_with Tweet.destroy(params[:id])
  end

  private
    def tweet_params
      params.require(:tweet).permit(:username, :text)
    end
end