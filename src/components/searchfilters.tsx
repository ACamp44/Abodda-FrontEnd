import './searchfilters.css'
import MapIcon from '../assets/map_icon.svg'
import FilterIcon from '../assets/filter_icon.svg'
import AlertIcon from '../assets/alert_icon.svg'

function SearchFilters() {
    return (
        <div id='filter_section'>
            <div id='button_bar'>
                <div id='left_buttons'>
                    <button className='filter_button'>
                        Min Price-Max Price
                    </button>
                    <button className='filter_button'>
                        Min Beds-Max Beds
                    </button>
                    <button className='filter_button'>
                        Property Type
                    </button>
                    <button className='filter_button'>
                        +4
                    </button>
                </div>
                <div id='right_buttons'>
                    <button className='filter_button' id='map_button'>
                        <div id='map_box'>
                            <img src={MapIcon} alt="" id='map_icon'/>
                        </div>
                    </button>
                    <button className='filter_button' id='main_filter'>
                        <div id='filter_text'>
                            Filters
                        </div>
                        <div id='filter_box'>
                            <img src={FilterIcon} alt="" id='filter_icon'/>
                        </div>
                    </button>
                    <button className='filter_button' id='alert_filter'>
                        <div id='alert_text'>
                            Create Alert
                        </div>
                        <div id='alert_box'>
                            <img src={AlertIcon} alt="" id='alert_icon'/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters