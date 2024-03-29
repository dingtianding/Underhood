import { connect } from 'react-redux';
import AssetChart from './asset_chart';

const mapStateToProps = (state, ownProps) => {
    return {
      assets: state.entities.assets,
      symbolDetails: state.entities.transactions.symbols,
      symbol: ownProps.symbol,
      name: ownProps.name,
    }
  }

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AssetChart);
