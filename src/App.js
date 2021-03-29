import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import logo from './images/logo.png';
import profilepic from './images/profilepic.png';
import explore1 from './images/explore1.jpg';
import explore2 from './images/explore2.jpg';
import explore3 from './images/explore3.jpg';
import explore4 from './images/explore4.jpg';
import explore5 from './images/explore5.jpg';
import explore6 from './images/explore6.jpg';
import explore7 from './images/explore7.jpg';
import explore8 from './images/explore8.jpg';
import rating from './images/stars.png';
import insta from './images/instagram.png';
import tiktok from './images/tiktok.png';
import youtube from './images/youtube.jpg';

// import PinterestLayout from './components/PinterestLayout.js';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Main />
    </div>
  </BrowserRouter>
);

const Navigation = () => (
  <nav>
    <ul>
      <NavLink exact activeClassName="current" to='/'><img src={logo} width="22%" align="left"></img></NavLink>
      <div id="bar" >
        <li><NavLink exact activeClassName="current" to='/'>Connect</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/explore'>Explore</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/profile'>My Profile</NavLink></li>
      </div>
      <img src={profilepic} width="3.5%" align="right" id="profilepic"></img>
    </ul>
  </nav>
);

const Home = () => (
    <div>
      <div class = "connectleft">Timeline</div>
      <div class = "connectright">Connections</div> 
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div class = "timeline">
        <img src={profilepic} width="45px" id="miniprofilepic" align="left"></img>
        <div class = "timelineinnerText">
          John Doe <p></p>
          <img src={explore5} style={{borderRadius: "16px"}} width="330px" height="200px"></img><p></p>
        </div>
        <img src={profilepic} width="45px" id="miniprofilepic" align="left"></img>
        <div class = "timelineinnerText"> John Doe <br/> </div>
          <div class="timelineinnerText2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat
          </div>
        <img src={profilepic} width="45px" id="miniprofilepic" align="left"></img>
        <div class = "timelineinnerText">
          John Doe <p></p>
          <img src={explore1} style={{borderRadius: "16px"}} width="330px" height="300px"></img><p></p>
        </div>

      </div>
      <div class = "pendingContracts">
      <div class = "timelineText">Current Active Contracts</div><br></br>
        <div class="contract">
          Contract 
          <div class ="contractinner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum
          <br></br><p></p>
          Amount: $xxx
          </div>
          <button class="button button3">Finish</button>
        </div>
        <div class="contract">
          Contract 
          <div class ="contractinner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum
          <br></br><p></p>
          Amount: $xxx
          </div>
          <button class="button button3">Finish</button>
        </div>
        <div class="contract">
          Contract 
          <div class ="contractinner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum
          <br></br><p></p>
          Amount: $xxx
          </div>
          <button class="button button3">Finish</button>
        </div>
      </div>
      <div class="connectioncolumn">
      <button class="button button2">
         <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
        <button class="button button2">
          <img src={profilepic} width="45px" id="miniprofilepic"></img>John Doe
        </button>
      </div>
      
    </div>
);

const Explore = () => (
  <div class="container">
    <input class="input input1" type="text" placeholder="Search.."></input>
    <p></p>
    <button class="button button1">Reality TV</button>
    <button class="button button1">Youtubers</button>
    <button class="button button1">Bloggers</button>
    <button class="button button1">Microinfluencers</button>
    <button class="button button1">Beauty</button>
    <button class="button button1">Lifestyle</button>
    <button class="button button1">Fashion</button>
    <button class="button button1">Small Businesses</button>
    <button class="button button1">Food</button>
    <button class="button button1">Sustainable Businesses</button>
    <button class="button button1">Travel</button>
    <button class="button button1">Fitness</button>
    <p></p>
	<div id="list" class="section">
    <div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item2"><img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
    <div class="item3"><img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
    <div class="item2"><img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item4"><img src={explore5} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item2"><img src={explore6} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item3"><img src={explore7} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item1"><img src={explore8} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item3"><img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item4"><img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item2"><img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item4"><img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
    <div class="item1"><img src={explore5} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item2"><img src={explore6} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item3"><img src={explore7} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item1"><img src={explore8} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item3"><img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item4"><img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item2"><img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
		<div class="item4"><img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></div>
	</div>		
</div>
);
const Profile = () => (
  <div>
    <div class="profilecolumn1">
      <img src={profilepic} width="350px" id="userpic"></img>
      <div class="profiletext">John Doe<br></br>
      <img src={rating} width="40%"></img><br></br>
      <div class="profiletextsmaller"> Rating: 4.08<br></br> </div>
      <img src={insta} width="50px" id="pic"></img>
      <img src={youtube} width="65px" id="pic"></img>
      <img src={tiktok} width="60px" id="pic"></img> <p></p>
      Most Recent Reviews:
      </div>
    </div>
  </div>
);
const Contract = () => (
  <div class = "contract">
    <div class = "contractTitle">
      Creating Contract with: John Doe
    </div>
    <div class = "contractsubTitle">
      Your information will be filled using your profile. Please make sure it is correct.
    </div>
    <div class="contractText">
      Type of Content:
    <input class="input input2" type="text" placeholder="e.g Instagram Post, Tiktok Video, etc.."></input> <br></br>
      Amount for Content:
    <input class="input input2" type="text" placeholder="if none enter 0.00"></input> <br></br>
      Amount of time given to create content:  
    <input class="input input2" type="text" placeholder="please enter in number of days"></input> <br></br>
     If a video, enter minimum amount of time: 
    <input class="input input2" type="text" placeholder="if it's not a video, leave this blank"></input> <br></br>
    Enter any other specifcation of the content you want: 
    <input class="input input2" type="text" placeholder="you can leave this blank"></input> <br></br>
    </div>
    <button class="button button3">Send</button>
  </div>
);
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/explore' component={Explore}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    <Route exact path='/contract' component={Contract}></Route>
  </Switch>
);
export default App;