import './App.css'
import {BrowserRouter as Router, Route, Routes, Navigate,Link} from 'react-router-dom';
import PropertyList from './property_list';
import PropertyMap from './property_list';
import Home from './home'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home></Home>}></Route>
          <Route path ="/propertylistview" element= {<PropertyList/>}></Route>
          <Route path ="/propertymapview" element= {<PropertyMap/>}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
