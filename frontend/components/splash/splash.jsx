import React from 'react';
import { Link } from 'react-router-dom';
import SplashBarContainer from './splash_bar_container';


export default () => (
    
    
  <div className="splash" >
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
  See&nbsp;
  <a href="https://github.com/dingtianding/Underhood/" target="_blank"><span className="tech-model">here
  </span> 
  </a>
  &nbsp;to learn more about the technologies used in this clone.
  </span>
  {/* <button id="myBtn">Modal</button> */}
  <div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>


</div>
  </p>
  </div>
  <div className="splash-footer">
      <div>
         
      </div>
      <div>
          <a href="https://angel.co/u/ding-tian-ding" className='splash-nav-links' target="_blank">AngelList</a>
          <a href="https://www.linkedin.com/in/deanding/" className='splash-nav-links' target="_blank">LinkedIn</a>
          <a href="https://github.com/dingtianding" className='splash-nav-links' target="_blank">GitHub</a>
        </div>
  </div>
</div>
)
