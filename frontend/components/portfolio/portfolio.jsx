import React from 'react';
import NavBar from '.././navbar/navbar_container'
import PortfolioLeft from './left/left'
import PortfolioRight from './right/stats'


class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.logout = this.logout.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
    }

    logout(){
        delete window.currentUser
        this.props.logout();
    }

    closeModal(){
        this.setState({showModal: false})
    }

    showModal(e){
        e.stopPropagation();
        this.setState({showModal: true})
    }


    render(){
        return (
            <div className="portfolio">
                <div className="portfolio_nav_bar">
                    <NavBar/>
                </div>
                <div className= "portfolio_body">
                    <div className="portfolio_container">
                        <PortfolioLeft/>
                        <PortfolioRight/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio