import React from 'react';
import AssetChart from './left/asset_chart'
import NavBarContainer from '../navbar/navbar_container';
import { formatDollarString } from '../../util/format_util';
import LoadingSpinner from './loading';

export default class AssetShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: this.props.match.params.assetSymbol,
      loading: true,
    }
  }

  componentDidMount() {
    document.title = `${this.props.match.params.assetSymbol} | Underhood`;
      Promise.all([
        this.props.fetchAssetInterval(this.props.match.params.assetSymbol),
        this.props.fetchAssetFull(this.props.match.params.assetSymbol),
        this.props.fetchAssetDetails(this.props.match.params.assetSymbol)])
        .then(() => this.setState({ loading: false, symbol: this.props.match.params.assetSymbol }));

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.assetSymbol !== this.props.match.params.assetSymbol) {
      this.componentDidMount();
    }
  }

  formatDollarStringSign(num) {
    const sign = (num > 0) ? '+' : '';
    return `${sign}${formatDollarString(num)}`
  }

  render() {
    
    if (this.state.loading || !this.props.details || !this.props.assets['interval'] || !this.props.details[this.state.symbol] || !this.props.assets['interval'][this.state.symbol]) return <LoadingSpinner/>
    if (this.props.assetErrors.length) return <LoadingSpinner errors={this.props.assetErrors} clearErrors={this.props.clearErrors} history={this.props.history}/>

    const details = this.props.details[this.state.symbol] || {};
  
    const assetValues = Object.values(this.props.assets['interval'][this.state.symbol]);
    const currentPrice = parseFloat(assetValues[0]["4. close"]);
    const initialPrice = parseFloat(assetValues[assetValues.length - 1]["4. close"]);
    const sign = ((currentPrice - initialPrice) > 0 ) ? '+' : '-';

    
    return (

      <div className='asset-show'>
        <NavBarContainer />

        <div className='asset-show-body'>
          <div className='main-asset-chart'>
            <div className='assetChartContainter'>
              <AssetChart assets={this.props.assets} name={details['Name']} symbol={this.state.symbol} />
            </div>

            <div className='about'>
              {/* <div className='about-title'>About Company</div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}