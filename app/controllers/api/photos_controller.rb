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
          6
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

  def next_photos
    @photos = Photo.includes(:user).find_by_sql([<<-SQL, current_user.id, params[:num_photos], params[:start_idx]])
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
          ?
        OFFSET
          ?
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

  def search
    tag = Tag.where(tag_name: params[:tag_name])

    @similar_tags = Dinosaurus.lookup(params[:tag_name])
    if (@similar_tags.length > 0)
      adjectives, nouns, verbs = [], [], []
      if (@similar_tags[:adjective])
        adjectives = @similar_tags[:adjective][:syn]
      end

      if (@similar_tags[:noun])
        nouns = @similar_tags[:noun][:syn]
      end

      if (@similar_tags[:verb])
        verbs = @similar_tags[:verb][:syn]
      end

      @similar_tags = adjectives.concat(nouns).concat(verbs)
      @similar_tags = Tag.joins(:taggings).joins(:photos).where(tag_name: @similar_tags)
    end

    if tag.length > 0 || @similar_tags.length > 0
      @photos = tag.first.photos
      render "api/photos/photos_search"
    else
      render(
        json: [],
        status: 200
      )
    end
  end

  def add_tag_to_photo
    @photo = Photo.find(params[:id])
    if @photo
      @tag = Tag.find_by(tag_name: params[:photo][:tag_name])
      if @tag
        @tagging = Tagging.new(tag_id: @tag.id, photo_id: @photo.id)
        if @tagging.save
          render "api/photos/update"
        else
          render(
            json: @tagging.errors.full_messages,
            status: 404
          )
        end
      else
        @tag = Tag.new(tag_params)
        if @tag.save
          @tagging = Tagging.new(tag_id: @tag.id, photo_id: @photo.id)
          if @tagging.save
            render "api/photos/update"
          else
            render(
              json: @tagging.errors.full_messages,
              status: 404
            )
          end
        else
          render(
            json: @tag.errors.full_messages,
            status: 404
          )
        end
      end
    else
      render(
        json: ["Photo could not be found. Please try again."],
        status: 404
      )
    end
  end

  def remove_tag_from_photo
    @tagging = Tagging.find_by(photo_id: params[:photo_id], tag_id: params[:id])
    if @tagging
      @tagging.destroy
      @photo = Photo.find(params[:photo_id])
      render "api/photos/update"
    else
      render(
      json: ["an error has occured."],
      status: 404
      )
    end
  end

  def destroy
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

  def tag_params
    params.require(:photo).permit(:tag_name)
  end
end
