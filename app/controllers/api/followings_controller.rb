class Api::FollowingsController < ApplicationController
  def create
    debugger
    @following = Following.new(Following.new({
      follower_id: 1,
      followed_id: following_params[:followed_id]
    }))

    if @following.save

    else
      
    end
  end

  def destroy

  end

private
  def following_params
    params.require(:following).permit(:followed_id)
  end

end
