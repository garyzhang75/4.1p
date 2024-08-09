import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header'
import Cardlist from './feature';
import Image from './Image';
import Tutorial from './tutoriallist';
import TUTORIAL from './tutoriallist';
import Signup from './signup';
import Footer from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render
(<div>
  <Header />
  <Image />
  <h1>
    <p style={{ textAlign: 'center', }} >this is the feature for homepage</p>
  </h1>
  
  <Cardlist />
  <button class="button">see more Artile</button>
  <p></p>
  <hr/>
  <hr/>
  <hr/>
  <h1>
    <p style={{ textAlign: 'center', }} >this is tutorials</p>
  </h1>
  
  <TUTORIAL />
  <div>
  <button class="button">see more tutorial</button>
  </div>
  <p></p>
  <hr/>
 <Signup />
 <p></p>
 <hr/>
 <Footer />
</div>
 
);