import './navbarsearch.css'
import RedLogo from '../assets/red_logo_resized.png'
import Login from '../assets/login.png'
import SearchButton from '../assets/search_button.svg'
import {BrowserRouter as Router, Route, Routes, Navigate,Link} from 'react-router-dom';

function NavBar() {
    return (
    <header id="bar_container">
        <div id = "right_navbar">
            <div id ="logo_container">
                <Link to ='/'><img src = {RedLogo} alt="" id='top_logo'/></Link>
            </div>
        </div>
        <div id='search_section_top'>
            <div id='search_main_top'>
                <input type="text" placeholder = "Search" id='search_input_top'/>
                <img src={SearchButton} alt="" id='top_button_image'/>
            </div>
            </div>
        <div id="left_navbar">
            <div id='page_link'>Review</div>
            <div id='page_link'>Join</div>
            <div id='login_container'>
                <img src={Login} alt="" id='login'/>
            </div>
        </div>
    </header>
    )
}

export default NavBar