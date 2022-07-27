class Api::StocksController < ApplicationController
    def index
      @user = User.find_by(id: params[:user_id])
    end
  
    def create
      @stock = Stock.new(stock_params)
      @user = User.find_by(id: params[:user_id])
      @stock.user_id = @user.id
      total_price = @stock.amount * @stock.unit_price
  
      if (total_price > @user.balance)
        render json: 'Balance is not sufficient, please add money to your account'
        return
      end
  
  
      if !@stock.save 
        render json: @stock.errors.full_messages, status: 401
      else
        @user.balance -= total_price
        @user.save!
      end
    end
  
  
    private 
    def stock_params
      params.require(:stock).permit(:amount, :unit_price, :ticker)
    end
  end
  