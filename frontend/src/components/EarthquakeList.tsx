import { Earthquake, EarthquakeDataProp } from "./Earthquake"

// Format of input to EarthquakeList
type EarthquakeListProps = {
    earthquakes: Array<EarthquakeDataProp>
}

/**
 * A component that lists every earthquake recorded in the past hour
 */

export function EarthquakeList({earthquakes}:EarthquakeListProps){

    
    return (
       <div className='w-1/5 h-full border-solid border-2'>
            {earthquakes.map((earthquake:EarthquakeDataProp) => (
                <div key={earthquake.properties.code}>
                    <Earthquake data={{
                        properties: {
                            place: earthquake.properties.place,
                            title: earthquake.properties.title,
                            time: earthquake.properties.time,
                            magType: earthquake.properties.magType,
                            mag: earthquake.properties.mag,
                            code: earthquake.properties.code
                        },
                        geometry: {
                            coordinates: earthquake.geometry.coordinates
                        }
                    }}/>
                </div>
            ))}
       </div>
    )
}