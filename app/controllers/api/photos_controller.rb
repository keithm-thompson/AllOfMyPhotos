class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render json: "api/photos/show"
    else
      render(
            json: @photo.errors.full_messages,
            status: 401
            )
    end
  end


  def delete
    @photo = Photo.find(params[:id])
    if @photo
      @photo.destroy!
      render json: "api/photos/show"
    else
      render(
      json: ["an error has occured"],
      status: 401
      )
  end

private
  def photo_params
    params.require(:photo).permit(:image)
  end
end
