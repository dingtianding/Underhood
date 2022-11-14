import React from 'react';
import { Link } from 'react-router-dom';
import SplashBarContainer from './splash_bar_container';


export default class Splash extends React.Component {
    constructor(props) {
      super(props);
    }
    
    hideModal() {
        $('.splash-disclaimer-modal-container').hide();
      }
    render() {

        return (
            <div className='splash' onClick={this.hideModal}>
                <div className='splash-disclaimer-modal-container'>
            <div className='splash-disclaimer-modal'>
            <div className='splash-disclaimer-modal-text'>
                <span className='disclaimer'>Disclaimer & Note:</span> <br /><br />
            Underhood is a clone of the website Robinhood created as as student project at App Academy. <br /><br /> This website does not perform real transactions.<br /><br />
            Underhood is built using free Stock APIs. Thus the number of stock lookup by using the search bar or clicking on a stock is limited to <u className='underline'>5 lookups per minute.</u>  <br /><br />
            If a stock search returns no result without yieling a console error, please try again in 1 - 2 mins as the count of request is registered on a running basis. <br /><br />
            <span className='disclaimer'>Click anywhere to proceed.</span>
            </div>
            </div>
        </div>
      <div className="splash-bar" >
        <SplashBarContainer/>
      </div>
    <div className="first-splash-component">
        <div className="splash-app-description">
            <div>
                <h1>Investing for</h1>
                <h1>Everyone</h1>
            </div>
            <div>
                <h3 className="description">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations and fees apply.</h3>
            </div>
            <Link to={"/signup"}>
                <button className="signin-button">Sign Up</button>
            </Link>
            <div>
                    <h2>
                        <a href="https://github.com/dingtianding/Underhood/blob/main/README.md" target="_blank">
                            Read me & Instructions  
                        </a>
                    </h2>
            </div>

        </div>

        <div>
            <img src="https://github.com/dingtianding/Underhood/blob/main/app/assets/images/splashPhone.png?raw=true"></img>
        </div>
    </div>
    
    <div className="second-splash-component">
    <p>
        <span>
            See&nbsp; <a href="https://github.com/dingtianding/Underhood/" target="_blank"><span className="tech-model">here
            </span> 
    </a>
    &nbsp;to learn more about the technologies used in this clone.
    </span>
    </p>

    </div>
    <div className="splash-footer">
        <div>
            
        </div>

        <div>
            <a href="https://github.com/dingtianding" className='splash-nav-links' target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/deanding/" className='splash-nav-links' target="_blank">LinkedIn</a>
            <a href="https://angel.co/u/ding-tian-ding" className='splash-nav-links' target="_blank">AngelList</a>
        </div>
    </div>
    </div>
    )
}
}