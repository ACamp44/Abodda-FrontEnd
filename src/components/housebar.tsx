import './housebar.css'
import House1 from '../assets/house1.png' 
import House2 from '../assets/house2.png' 
import HouseIcons from '../assets/house_icons.svg' 
function HouseBar(props) {
    return (
    <div id='house_section'>
        <div id='property_title'>
            <h2>
                {props.title}
            </h2>
        </div>
        <div id='main_container'>
            <div id='house'>
                <div id='house_pic_box'>
                    <img src={House1} alt="" id='house_pic'/>
                </div>
                <div id='house_info_box'>
                <div id='first_line'> 
                        <div id='l1_text'>Bryes Road, Glasgow<br/> 1 Br Flat</div>
                        <div id='house_icon_box'>
                            <img src={HouseIcons} alt="" id='house_icons'/>
                        </div>
                    </div>
                </div>
                <div id='price'>£252,000</div>
            </div>
            <div id='house'>
                <div id='house_pic_box'>
                    <img src={House2} alt="" id='house_pic'/>
                </div>
                <div id='house_info_box'>
                <div id='first_line'> 
                        <div id='l1_text'>Bryes Road, Glasgow<br/> 1 Br Flat</div>
                        <div id='house_icon_box'>
                            <img src={HouseIcons} alt="" id='house_icons'/>
                        </div>
                    </div>
                </div>
                <div id='price'>£252,000</div>
            </div>
            <div id='house'>
                <div id='house_pic_box'>
                    <img src={House1} alt="" id='house_pic'/>
                </div>
                <div id='house_info_box'>
                <div id='first_line'> 
                        <div id='l1_text'>Bryes Road, Glasgow<br/> 1 Br Flat</div>
                        <div id='house_icon_box'>
                            <img src={HouseIcons} alt="" id='house_icons'/>
                        </div>
                    </div>
                </div>
                <div id='price'>£252,000</div>
            </div>
            <div id='house'>
                <div id='house_pic_box'>
                    <img src={House2} alt="" id='house_pic'/>
                </div>
                <div id='house_info_box'>
                    <div id='first_line'> 
                        <div id='l1_text'>Bryes Road, Glasgow<br/> 1 Br Flat</div>
                        <div id='house_icon_box'>
                            <img src={HouseIcons} alt="" id='house_icons'/>
                        </div>
                    </div>
                    <div id='price'>£252,000</div>
                </div>
            </div>
        </div>
        <div id='button_box'>
            <button id='see_all_button'>See All</button>
        </div>
    </div>
    )
}

export default HouseBar