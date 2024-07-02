import './mapview.css'
import Map from '../assets/map.svg'

function MapView() {
    return (
        <div id='mapview_container'>
            <div id='left'>

            </div>
            <div id='right'>
                <img src={Map} alt="" id='map_image' />
            </div>
        </div>
    )
}

export default MapView