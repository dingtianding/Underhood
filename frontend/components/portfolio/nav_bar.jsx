import React from 'react'
import {Link} from 'react-router-dom'


class NavBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            opened: false,
            keyword: '',
            results: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleWindowClick=this.handleWindowClick.bind(this)
        this.handleSearch = this.handleSearch.bind(this);
        this.debounceSearch = this.debounceSearch.bind(this)();
      //   this.listener = (e) => {
      //   const searchBar = document.getElementById('search-bar');
      //   const results = document.querySelector('.nav_searchresults')
      //   if (searchBar.contains(e.target)) {
      //   $('.nav_searchresults').removeClass('hidden');
      // } else {
      //   $('.nav_searchresults').addClass('hidden');
    //   // }
    // }
    // document.addEventListener('mouseup', this.listener);
    }

    handleClick(e){
        e.stopPropagation();
        this.setState({ opened: !this.state.opened })
    }

    handleWindowClick(e){
        this.setState({opened: false})
    }
    componentWillUnmount() {
        document.removeEventListener('mouseup', this.listener);
      }
    
      toggleSearchResults() {
        $('.nav_searchresults').toggleClass('hidden');
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
      if (!this.props) return null;
        return (
          <section className="nav_bar">
                <div className="nav_logo">
                    <Link to="/portfolio"><h1 id="nav_text">Underhood</h1></Link>
                </div>

                <div className='nav_search'>
                    <div className='nav_searchcontainer'>
                        <input id="search-bar" type="text" placeholder='Search' value={this.state.keyword} onChange={this.handleSearch} className='nav_searchinput' onFocus={this.toggleSearchResults} autoComplete="off"/>
                    </div>
                    <div className='nav_searchresults'>
                    { this.renderSearchResults()}
                    </div>
                </div>

                <div className={`nav_btn`}>
                    {/* <button onClick={(e)=>this.handleClick(e)}>Reward</button> */}
                    
                    <a href="https://github.com/dingtianding">GitHub</a>
                    <a href="https://www.linkedin.com/in/deanding/">Linkedin</a>
                    <Link to={"/portfolio"}>
                        <button>Portfolio</button>
                    </Link>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
          </section>
        );
      }
    }

export default NavBar
