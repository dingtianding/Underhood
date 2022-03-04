import React from 'react'
import {Link} from 'react-router-dom'
import SearchDropdown from './search_dropdown'


class NavBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            opened: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleWindowClick=this.handleWindowClick.bind(this)
    }

    handleClick(e){
        e.stopPropagation();
        this.setState({ opened: !this.state.opened })
    }

    handleWindowClick(e){
        this.setState({opened: false})
    }

    render() {
        return (
          <section className="nav_bar">
                <div className="nav_logo">
                    <Link to="/portfolio"><h1 id="nav_text">Underhood</h1></Link>
                </div>
                <div className="nav_search">
                    <div className="nav_searchContainer">
                        <input className="nav_searchinput" placeholder="Search" type='text'></input>
                    </div>
                </div>
                <div className={`nav_btn`}>
                    <button onClick={(e)=>this.handleClick(e)}>Reward</button>
                    <Link to={"/portfolio"}>
                        <button>Portfolio</button>
                    </Link>
                    <button onClick={(e)=>this.handleClick(e)}>Cash</button>
                    <button onClick={(e)=>this.handleClick(e)}>Message</button>
                    <button onClick={(e)=>this.handleClick(e)}>Account</button>
                </div>
          </section>
        );
      }
    }

export default NavBar
