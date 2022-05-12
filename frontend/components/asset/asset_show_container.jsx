import { connect } from 'react-redux';
import { fetchAssetFull, fetchAssetInterval, fetchAssetDetails, clearErrors } from '../../actions/asset_actions';
import { fetchAssetNews } from '../../actions/stock_action';
import { logout } from '../../actions/session_actions';
import AssetShow from './asset_show';

const mapStateToProps = (state, ownProps) => {
  return {
  user: state.entities.users[state.session.id],
  assets: state.entities.assets,
  details: state.entities.assets.details,
  assetErrors: state.errors.asset
}
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAssetFull: (symbol) => dispatch(fetchAssetFull(symbol)),
  fetchAssetInterval: (symbol) => dispatch(fetchAssetInterval(symbol)),
  fetchAssetDetails: (symbol) => dispatch(fetchAssetDetails(symbol)),
  fetchAssetNews: (symbol, start, end) => dispatch(fetchAssetNews(symbol, start, end)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(AssetShow);
