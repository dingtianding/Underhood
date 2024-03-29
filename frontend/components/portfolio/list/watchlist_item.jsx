import React from 'react';

export default class MiniWatchlistItem extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    $(`#mini-icon-${this.props.watchlist.id}`).html(this.props.watchlist.icon)
  }
  componentDidUpdate() {
    $(`#mini-icon-${this.props.watchlist.id}`).html(this.props.watchlist.icon)
  }

  render() {
    const assetLength = Object.keys(this.props.watchlist.assets).length;
    const itemLength = assetLength === 1 ? `${assetLength} item` : `${assetLength} items`;
    const icon = 128161
    return (
      <div className='mini-watchlist-item'>
        {/* <div className='mini-icon' id={`mini-icon-${this.props.watchlist.id}`}></div> */}
        <div className='mini-item-details'>
          <div className='mini-watchlist-name column'>{this.props.watchlist.name}</div>
          <div className='mini-watchlist-itemLength column'>{itemLength}</div>
        </div>
      </div>
    )
  }
}