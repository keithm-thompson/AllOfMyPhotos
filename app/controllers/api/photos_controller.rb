class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render "api/photos/show"
    else
      render(
            json: @photo.errors.full_messages,
            status: 401
            )
    end
  end

  def initial_feed
    @photos = Photo.includes(:user).find_by_sql([<<-SQL, current_user.id])
        SELECT
          photos.*
        FROM
          photos
        WHERE
          photos.user_id IN (
            SELECT
              followings.followed_id
            FROM
              users
            JOIN
              followings ON followings.follower_id = users.id
            WHERE
              followings.follower_id = ?
            )
        ORDER BY
          photos.created_at DESC
        LIMIT
          10
        SQL
    if @photos
      render "api/photos/feed"
    else
      render(
        json: ["Feed could not be fetched. Please try again"],
        status: 404
      )
    end

  end

  def full_feed
    @photos = Photo.includes(:user).find_by_sql([<<-SQL, current_user.id])
        SELECT
          photos.*
        FROM
          photos
        WHERE
          photos.user_id IN (
            SELECT
              followings.followed_id
            FROM
              users
            JOIN
              followings ON followings.follower_id = users.id
            WHERE
              followings.follower_id = ?
            )
        ORDER BY
          photos.created_at DESC
      SQL
    if @photos
      render "api/photos/feed"
    else
      render(
        json: ["Feed could not be fetched. Please try again"],
        status: 404
      )
    end

  end

  def delete
    @photo = Photo.find(params[:id])
    if @photo
      @photo.destroy!
      render "api/photos/show"
    else
      render(
      json: ["an error has occured"],
      status: 401
      )
    end
  end

private
  def photo_params
    params.require(:photo).permit(:image, :title)
  end
end
