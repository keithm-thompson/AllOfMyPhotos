class Api::FollowingsController < ApplicationController
  def create
    debugger
    @following = Following.new(Following.new({
      follower_id: current_user.id,
      followed_id: following_params[:followed_id]
    }))

    if @following.save
      render "api/followers/show"
    else
      render(
        json: ["an error has occurred"],
        status: 401
      )
    end
  end

  def destroy
    @following = Follow.find_by(
    follower_id: current_user.id,
    followed_id: following_params[:followed_id]
    )

    if @following
      @following.destroy
      render "api/followers/destroy"
    else
      render(
      json: ["an error has occurred"],
      status: 401
      )
    end
  end

private
  def following_params
    params.require(:following).permit(:followed_id)
  end

end
