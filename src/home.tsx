import './home.css'
import NavBar from './components/navbar'
import SearchNavBar from './components/navbarsearch'
import React, { useState, useEffect } from 'react';
import BigHouse from './assets/main_house.png'
import HouseBar from './components/housebar'
import BigBar from './components/bigbar'
import CommunityBar from './components/communitybar'
import Footer from './components/footer'
import SearchButton from './assets/search_button.svg'
import {BrowserRouter as Router, Route, Routes, Navigate,Link} from 'react-router-dom';

function Home() {
  
  const ScrollTracker = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
  
      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
  
      setScrollPercentage(scrollPosition);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div id='navbar'>
        {scrollPercentage > 5 ? <SearchNavBar/> : <NavBar/>}
      </div>
    );
  };
  return (
    <div id='page'>
      <div id='main'>
        <div id='navbar'>
          {ScrollTracker()}
        </div>
        <div id="content">
          <div id='spacer'></div>
          <div id='search_section'>
            <div id='search_container'>
                <div id='top_search_text'>
                  <div id='search_category'>
                    Properties
                  </div>
                  <div id='search_category'>
                    Neighbourhoods
                  </div>
                  <div id='search_category'>
                    Things to do
                  </div>
                  <div id='search_category'>
                    Community
                  </div>
                </div>
                <div id='search_box'>
                  <div id='search_main'>
                    <input type="text" placeholder = "Search" id='search_input'/>
                    <Link to ='/propertylistview'><img src={SearchButton} alt="" id='button_image'></img></Link>
                  </div>
                </div>
            </div>
          </div>
          <h1 id='intro_text'>
            Enjoy a new property <br/>
            adventure for 2024
          </h1>
          <div id='join_us'>
              <button id='join_us_button'>Join Us</button>
          </div>
          <div id='main_pic_section'>
            <div id='main_pic_box'>
                <img src={BigHouse} alt="" id='main_pic'/>
            </div>
          </div>
          <div id='property_section'>
            <HouseBar
              title="Property for sale in Glasgow"
            />
          </div>
          <div id='property_section'>
            <HouseBar
              title="Property for rent in Edinburgh"
            />
          </div>
          <div id='bigbar'>
            <BigBar title="Explore Neighbourhoods in Glasgow"></BigBar>
          </div>
          <div id='property_section'>
            <HouseBar
              title="Property for sale in Glasgow"
            />
          </div>
          <div id='property_section'>
            <HouseBar
              title="Property for rent in Edinburgh"
            />
          </div>
          <div id='bigbar'>
            <BigBar title="Explore Neighbourhoods in Glasgow"></BigBar>
          </div>
          <div id='property_section'>
            <HouseBar
              title="Property for sale in Glasgow"
            />
          </div>
          <div id='property_section'>
            <HouseBar
              title="Property for rent in Edinburgh"
            />
          </div>
          <div id="community_section">
              <CommunityBar title = "Get Involved in the Community"></CommunityBar>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  )
}

export default Home
