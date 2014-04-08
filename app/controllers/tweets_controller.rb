class TweetsController < ApplicationController
  respond_to :json

  def index
    respond_with Tweet.all
  end
end
