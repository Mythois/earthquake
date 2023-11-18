import { Fragment} from 'react'
import MapViz from './components/MapViz'
import { EarthQuake } from './components/Earthquake'

import './App.css'
import { EarthquakeList } from './components/EarthQuakeList'

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
        <div className='w-1/5 h-full border-solid border-2'>
          <EarthQuake place={Edata.place} time={Edata.time} magType={Edata.magType} mag={Edata.mag}/>
        </div>
        
        
      </Fragment>
  )
}

export default App
