import StockShow from './stock_show';
import { connect } from 'react-redux';
import { fetchUserStockInfo } from '../../actions/stock';


const mSTP = ({entities, session}, ownParams) => ({
    currentUser: entities.users[session.currentUserId],
})

const mDTP = (dispatch) => ({
    fetchUserStockInfo: (userId) => dispatch(fetchUserStockInfo(userId))
})

const StockShowContainer = connect(mSTP, mDTP)(StockShow);

export default StockShowContainer
