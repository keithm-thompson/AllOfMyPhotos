class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id

    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end


  def destroy
    @album = Album.find(params[:id])

    if @album
      @album.destroy
      render "api/albums/show"
    else
      render(
      json: ["an error has occured"],
      status: 404
      )
    end
  end

  def add_photo
    @album_photo = AlbumPhoto.new(album_id: params[:album_id],
                                  photo_id: params[:id])

    if @album_photo.save
      render "api/albums/album_photo_relationship"
    else
      render json: @album_photo.errors.full_messages, status: 422
    end
  end

  def remove_photo
    @album_photo = AlbumPhoto.find_by(album_id: params[:album_id],
                                  photo_id: params[:id])
    if @album_photo
      @album_photo.destroy
      render "api/albums/album_photo"
    else
      render(
      json: ["an error has occured"],
      status: 404
      )
    end
  end


private
  def album_params
    params.require(:album).permit(:title, :description)
  end
end
