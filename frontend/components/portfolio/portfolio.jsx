import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '.././navbar/navbar_container'
import NewsFeed from './news/newsfeed'
import LineGraph from './chart/line_graph'
import TimeLine from './chart/timeline'
import AddFundsForm from './form/add_funds_form';

import AssetListItem from './list/asset_list_item';
import MiniWatchlistItem from './list/watchlist_item';


import { formatDollarString } from '../../util/format_util'


class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stockSymbols: [],
            watchlistValues: [],
            loading: true
        }

    }

    

    componentDidMount() {
        document.title = "Portfolio | Underhood";
        this.props.fetchTransactions(this.props.user.id)
          .then( () => {
            this.props.fetchWatchlists(this.props.user.id)
              .then(() => {
                this.setState({
                  stockSymbols: Object.keys(this.props.symbols),
                  watchlistValues: Object.values(this.props.watchlists)
                });
    
                Promise.all(this.state.stockSymbols.map(symbol =>
                  this.props.fetchAssetInterval(symbol)))
                  .then(() => this.setState({ loading: false }));
              })
          })
      }


    clickBuyPower(e) {
        const buyPowerDiv = document.querySelector('.buying-power-div');
        const button = document.getElementById('bp-button');
        const deposit = document.getElementById('add-funds');
    
    
        buyPowerDiv.classList.toggle('gray-background');
        button.classList.toggle('hidden');
        deposit.classList.toggle('hidden');
      };
      
    clickDeposit(e) {
        e.preventDefault();
        document.querySelector('.funds-modal').classList.toggle('hidden');
    }
    

    render(){
        return (
            <div className="portfolio">
                <div className="portfolio_nav_bar">
                    <NavBar/>
                </div>

                <AddFundsForm addFunds={this.props.addFunds} user={this.props.user} fetchTransactions={this.props.fetchTransactions} user={this.props.user}/>

                <div className= "portfolio_body">
                    <div className="portfolio_container">

                    <div className="left">
                    <div className="left_container">
                        <div className="left_chartSection">
                            <div className="left_portfolio">
                                <div className="left_chart_header">
                                    <h1 className="port_value">$1,363,440.63</h1>
                                    <p className="port_change">+ 363,440.63 (+36.34%)</p>
                                    <p className="port_timeline">Past Year</p>
                                </div>

                                <div className="left_chart">
                                    <LineGraph  />
                                    <TimeLine />
                                </div>

                                <div className="left_buyingpower">
                                    <div className='buying-power-div' >
                                        <div className='buying-power flex-between' id='bp-button' onClick={this.clickDeposit}>
                                            <div>Buying Power</div>
                                            <div>{formatDollarString(parseFloat(this.props.user.buying_power))}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="left_notices">
                                    <div className="left_notices_box">
                                        <p> New Free Stock Program!</p>
                                        <h1> Refer a friend. Pick fractional shares of stocks like Meta, GameStop, or AMC! Limitations apply. </h1>
                                        <button> <span id="a">Invite friends</span><span id="b">No friends avaliable :(</span></button>
                                    </div>
                                </div>
                                <NewsFeed />
                            </div>
                        </div>
                    </div>
                </div>
            <div className='lists'>
                <aside className='lists-container'>
                
                <div className='lists-header'>
                    <p>Stocks</p>
                </div>

                        {
                        this.state.stockSymbols.map((symbol, idx) =>
                            <AssetListItem symbol={symbol} assets={this.props.assets['interval']} key={idx} quantity={this.props.symbols[symbol].quantity}/>
                            )
                        }
                <div className='lists-header'>
                    <p>Watchlists</p>
                </div>                        {
                        this.state.watchlistValues.map((watchlist) =>
                            <Link to={`/watchlist/${watchlist.id}`} key={watchlist.id}>
                                <MiniWatchlistItem watchlist={watchlist}  />
                            </Link>
                        )
                        }
                </aside>         
            </div>
           
        </div>
    </div>
</div>
        )
    }
}

export default Portfolio