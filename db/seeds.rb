# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_account = User.create(
    email: '1@aa.com',
    first_name: 'demo', 
    last_name: 'user', 
    password: '123456', 
    buying_power: 69420.88
)

transaction1 = PortfolioTransaction.create(
    owner_id: demo_account.id, 
    is_purchase: true, 
    quantity: 90, 
    transaction_price: 20.15, 
    symbol: 'AMC', 
    current_total: 2999.24, 
    created_at: 365.days.ago)

watchlist1 = Watchlist.create(
    user_id: demo_account.id, 
    name: 'Stock Watchlist');

watched1 = WatchlistAsset.create(
    watchlist_id: watchlist1.id, 
    symbol: 'AMC');
