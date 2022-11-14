class AddUserBuyingPower < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :buying_power, :decimal, presence: true, default: 0
  end
end
