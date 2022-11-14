import React from 'react';
import AssetChart from './chart/asset_chart'
import NavBarContainer from '../navbar/navbar_container';
import { formatDollarString } from '../../util/format_util';
import LoadingSpinner from '../loading';
import AssetNewsContainer from './news/asset_news_container';
import TransactionForm from './form/transaction_form';
import WatchlistAssetModalContainer from '../watchlist/watchlist_asset_modal_container';



export default class AssetShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: this.props.match.params.assetSymbol,
      loading: true,
    }
  }

  componentDidMount() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)

    document.title = `${this.props.match.params.assetSymbol} | Underhood`;
      Promise.all([
        this.props.fetchAssetInterval(this.props.match.params.assetSymbol),
        this.props.fetchAssetDetails(this.props.match.params.assetSymbol),
        this.props.fetchAssetNews(this.props.match.params.assetSymbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0],"c8it1riad3ibm5ej5gu0"
        )
      ])
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
    console.log(this.props)

    const symbolDetails = this.props.symbolDetails[this.props.match.params.assetSymbol];
    const quantityOwned = symbolDetails ? parseFloat(symbolDetails['quantity']) : 0;
    const details = this.props.details[this.state.symbol] || {};  
    const assetValues = Object.values(this.props.assets['interval'][this.state.symbol]);
    const currentPrice = parseFloat(assetValues[0]["4. close"]);
    const initialPrice = parseFloat(assetValues[assetValues.length - 1]["4. close"]);
    const sign = ((currentPrice - initialPrice) > 0 ) ? '+' : '-';
    
    return (

      <div className='asset-show'>
        <WatchlistAssetModalContainer symbol={this.state.symbol} sign={sign}/>
        <NavBarContainer />

        <div className='asset-show-body'>
          <div className='main-asset-chart'>
            <div className='assetChartContainter'>
              <AssetChart assets={this.props.assets} name={details['Name']} symbol={this.state.symbol} />
            </div>

            <div className='about'>
              <div className='about-title'>About Company</div>
              <div className='about-body'>{details['Description']}</div>
            </div>

            <div className='left-news'>
              <div className='left-news_box'>
                <h1>News</h1>
              </div>
              <div >
                <AssetNewsContainer symbol= {this.props.match.params.assetSymbol} />
              </div>
            </div>
          </div>
          <TransactionForm symbol={this.props.match.params.assetSymbol} user={this.props.user} assets={this.props.assets} createTransaction={this.props.createTransaction} currentPrice={currentPrice} quantityOwned={quantityOwned} sign={sign} errors={this.props.errors} createWatchlistAsset={this.props.createWatchlistAsset}/>
        </div>
      </div>
    )
  }
}