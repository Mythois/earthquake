
import { Earthquake, EarthquakeDataProp } from "./Earthquake"

// Format of input to EarthquakeList
export type EarthquakeListProps = {
    earthquakes: Array<EarthquakeDataProp>
    handleButtonClick: (earthquakeData: EarthquakeDataProp) => void
    handleHover: (code:string) => void
    
}

/**
 * ABOUT THIS COMPONENT
 * This component is a list of earthquakes / cards (Earthquake.tsx) representing earthquakes. It provides an overview
 * over all the earthquakes that have been registered.
 * @param earthquakes: A list of objects (of type EarthquakeDataProp). Each object represents an earthquake
 *                      which will be shown in the list as cards (Earthquake.tsx)
 * @callback handleButtonClick: A function used to check whether the Details button on one of the earthquake
 *                      cards in the list has been pressed. It is passed on to each earthquake element in the list. 
 *                      Modifies the showModal state in Frontpage.tsx
 * @callback handleHover: A function used to check whether one of the earthquake cards in in the list is hoverd.
 *                      The function is passed on to each card in in the list. Modifies the hoverCode state in Frontpage.tsx  
 * @returns A list of cards representing registered earthquakes.
 */

export function EarthquakeList({earthquakes, handleButtonClick, handleHover}:Readonly<EarthquakeListProps>){

    
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
                    handleButtonClick={() => handleButtonClick(earthquake)}
                    handleHover={handleHover}/>
                </div>
            ))}
       </div>
    )
}