import {connect} from 'react-redux'
import { getCurrentUser } from '../../actions/users_actions'
import { addFunds } from '../../actions/session_actions'
import { fetchTransactions } from '../../actions/transaction_action';
import { fetchAssetInterval} from '../../actions/asset_actions';
import { fetchWatchlists } from '../../actions/watchlist_actions'; 
import Portfolio from './portfolio'

const mapStateToProps = (state) => ({
        user: state.entities.users[state.session.currentUser.id],
        transactions: state.entities.transactions.data,
        symbols: state.entities.transactions.symbols,
        assets: state.entities.assets,
        interval: state.entities.transactions.interval,
        watchlists: state.entities.watchlist,
        errors: state.entities.errors || []

    })


const mapDispatchToProps = dispatch => ({
        getCurrentUser: userId => dispatch(getCurrentUser(userId)),
        addFunds: (userId, amount) => dispatch(addFunds(userId, amount)),
        fetchTransactions: (userId, interval) => dispatch(fetchTransactions(userId, interval)),
        fetchAssetInterval: (symbol) => dispatch(fetchAssetInterval(symbol)),
        fetchWatchlists: (userId) => dispatch(fetchWatchlists(userId))

    })


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
