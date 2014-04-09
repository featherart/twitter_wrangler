class TweetsController < ApplicationController
  respond_to :json

  def index
    respond_with Tweet.all
  end

  def destroy
    respond_with Tweet.destroy(params[:id])
  end
end