class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new(Following.new({
      follower_id: current_user.id,
      followed_id: following_params[:followed_id]
    }))

    if @following.save
      render "api/followings/show"
    else
      render(
        json: @following.errors.full_messages,
        status: 401
      )
    end
  end

  def destroy
    @following = Following.find(params[:id])

    if @following
      @following.destroy!
      render "api/followings/show"
    else
      render(
        json: ["an error has occured"],
        status: 401
      )
    end

  end

private
  def following_params
    params.require(:following).permit(:followed_id)
  end

end
