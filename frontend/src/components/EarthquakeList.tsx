import { Earthquake, EarthquakeDataProp } from "./Earthquake"

// Format of input to EarthquakeList
export type EarthquakeListProps = {
    earthquakes: Array<EarthquakeDataProp>
    handleButtonClick: (earthquakeData: EarthquakeDataProp) => void
}

/**
 * A component that lists every earthquake recorded in the past hour
 */

export function EarthquakeList({earthquakes, handleButtonClick}:EarthquakeListProps){

    
    return (
       <div className='w-screen h-screen sm:w-1/5 sm:h-screen border-solid border-2 overflow-y-auto'>
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
                    }}
                    handleButtonClick={() => handleButtonClick(earthquake)}/>
                </div>
            ))}
       </div>
    )
}