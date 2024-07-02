import SearchNavBar from './components/navbarsearch'
import SearchFilters from './components/searchfilters'
import MapView from './components/mapview'
import './property_list.css'

function PropertyList() {
    return (
        <div id='page'>
            <div id='main'>
                <div id='navbar'>
                  <SearchNavBar></SearchNavBar>
                </div>
                <div id='search_filter'>
                    <SearchFilters></SearchFilters>
                </div>
                <div>
                    <MapView></MapView>
                </div>
            </div>
        </div>
    )
}

export default PropertyList