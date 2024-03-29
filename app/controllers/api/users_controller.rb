class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = current_user
    if @user
      render :show
    else
      render json: ['User must be logged in'], status: 401
    end
  end

  def update 
    @user = current_user
    @user.buying_power += params[:amount].to_i
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
