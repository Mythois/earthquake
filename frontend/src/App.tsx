import { Fragment} from 'react'
import MapViz from './components/MapViz'


import './App.css'
import { EarthquakeList } from './components/EarthquakeList'

function App() {
  const Edata = {
    place: "54 km SSE of Cordova, Alaska",
    title: "M 1.6 - 54 km SSE of Cordova, Alaska",
    time:1700309124003,
    magType: "ml",
    mag:1.6
  }


  return (
      <Fragment>
        earthquake
        <EarthquakeList earthquakes={[]}/>
        
        
      </Fragment>
  )
}

export default App
