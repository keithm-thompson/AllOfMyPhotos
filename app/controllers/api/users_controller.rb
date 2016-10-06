class Api::UsersController < ApplicationController
	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def search
    @users = User.find_by_sql([<<-SQL, current_user.id, "^" + params[:username] + ".*"])
      SELECT
       users.*
      FROM
       users
      WHERE
        users.id != ?
      ORDER BY
       (substring(users.username from ?))
      SQL
    render "api/users/search"
  end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end


end
