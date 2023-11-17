import { Fragment} from 'react'
import MapViz from './components/MapViz'

import './App.css'

function App() {



  return (
      <Fragment>
        <h1>Earthquake</h1>
        <MapViz latitude={51.505} longitude={-0.09}/>
      </Fragment>
  )
}

export default App
