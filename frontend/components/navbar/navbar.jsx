import React from 'react';
import { Link } from 'react-router-dom';


export default class PortfolioHeader extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      keyword: '',
      results: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.debounceSearch = this.debounceSearch.bind(this)();
    this.listener = (e) => {
      const searchBar = document.getElementById('search-bar');
      const results = document.querySelector('.search-results-div')
      if (searchBar.contains(e.target)) {
        $('.search-results-div').removeClass('hidden');
      } else {
        $('.search-results-div').addClass('hidden');
      }
    }
    document.addEventListener('mouseup', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.listener);
  }

  toggleSearchResults() {
    $('.search-results-div').toggleClass('hidden');
  }


  debounceSearch() {
    let timer;
    return (keyword) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        Promise.all([this.props.fetchSearch(keyword)])
          .then(() => {
            this.setState({ results: this.props.results[keyword] || [] })
          })
      }, 1000);
    }
  }

  handleSearch(e) {
    const keyword = e.currentTarget.value;
    if (!keyword) {
      this.setState({ keyword: '', results: '' });
    } else {
      this.setState({ keyword: keyword }, 
        this.debounceSearch(keyword)
        )
    }
  }

  renderSearchResults() {
    if (!this.state.results && !this.state.keyword) return '';
    if (this.state.keyword && !this.state.results.length) return (
        <div className='no-results'>We were unable to find any results for your search.</div>
    )
    const searchRow = this.state.results.map((result, idx) => {
      const symbol = result["1. symbol"];
      if (symbol.includes('.') || symbol.length >=5 ) return '';
      return (
        <Link to={`/assets/${symbol}`} key={idx} className='search-result'>
          <div className='search-result-symbol'>{symbol}</div>
          <div>{result["2. name"]}</div>
        </Link>
      )
    })
    return (
      searchRow
    );
  }

  render() {
    return (
      <nav className='port-nav'>
                    
        <div className="logo">
          <Link style={{textDecoration: 'none'}} to="/portfolio"> <h1 className="logo-text2">Underhood</h1> </Link>
        <img src={'https://aa-underhood.s3.us-east-2.amazonaws.com/logo-feather.png'} className='splash-feather'/>
      </div>

        <div className='search-bar-div'>
          <div className='search-bar-flex'>
            <div className='magnify-glass'><i className="fas fa-search"></i></div>
            <input type="text" placeholder='Search' value={this.state.keyword} onChange={this.handleSearch} id='search-bar' onFocus={this.toggleSearchResults} autoComplete="off"/>
          </div>
          <div className='search-results-div hidden'>
          { this.renderSearchResults()}
          </div>
          
        </div>

        <div className='portfolio-nav-links'>
          <Link to='/portfolio' className='portfolio-nav-links'>Portfolio</Link>
          <a href="https://angel.co/u/ding-tian-ding" className='portfolio-nav-links' target="_blank">AngelList <i className="fab fa-angellist"></i></a>
          <a href="https://www.linkedin.com/in/deanding/" className='portfolio-nav-links' target="_blank">LinkedIn <i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/dingtianding" className='portfolio-nav-links' target="_blank">GitHub <i className="fab fa-github"></i></a>
          <button onClick={this.props.logout} className='portfolio-nav-links'>Logout</button>
        </div>
      </nav>
    )
  }
    
}