class CreatePortfolioTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_transactions do |t|
      t.string :symbol, null: false
      t.integer :owner_id, presence: true
      t.boolean :is_purchase, presence: true
      t.float :quantity, presence: true
      t.float :transaction_price, presence: true
      t.float :current_total, default: 0.0, null: false
      t.timestamps
    end
    add_index :portfolio_transactions, :owner_id
  end
end
