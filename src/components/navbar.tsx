import './navbar.css'
import RedLogo from '../assets/red_logo_resized.png'
import Login from '../assets/login.png'
import {BrowserRouter as Router, Route, Routes, Navigate,Link} from 'react-router-dom';
function NavBar() {
    return (
    <header id="bar_container">
        <div id = "right_navbar">
        <div id ="logo_container">
                <Link to ='/'><img src = {RedLogo} alt="" id='top_logo'/></Link>
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