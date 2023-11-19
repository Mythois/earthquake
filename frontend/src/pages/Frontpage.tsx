import { GET_EARTHQUAKES } from "@/utils/queries/getEarthquakes"
import { useQuery } from "@apollo/client"
import { EarthquakeList } from "@/components/EarthquakeList"
import EarthquakeMap from "@/components/EarthquakeMap"
import { useState } from "react"
import { Modal } from "@/components/Modal"
import { EarthquakeDataProp } from "@/components/Earthquake"

/**
 * ABOUT THIS COMPONENT
 * This component represents the front page of the application.
 * It consists of a list of earthquakes that were registered in the past hour.
 * Furthermore it contains a map showing where these earthquakes are located on Eath.
 * The map is only visible in desktop mode and not in mobile view due to space limitations.
 * Hovering over an earthquake shown in the list of earthquakes will highlight the corresponding
 * marker on the map.
 * Clicking on the "Details" button pertaining to any of the earthquakes in the list, 
 * will result in a modal appearing. The modal provides additional data about the earthquake.
 * @returns A page with an EarthquakeList on the left side and an EarthquakeMap on the right side
 */


export function Frontpage(){
    const [showModal, setShowModal] = useState(false) // Modal not shown by default
    const [earthquakeData, setEarthquakeData] = useState<EarthquakeDataProp | undefined>(undefined)
    const [hoverCode, setHoverCode] = useState<string>('')


    const handleButtonClick = (earthquakeData: EarthquakeDataProp) => {
        // Make modal visible on button press
        setShowModal(true)
        setEarthquakeData(earthquakeData)
    }

    const handleCloseModal = () => {
        // Make modal invisible when closed
        setShowModal(false)
    }

    const handleHover = (code:string) => {
        setHoverCode(code)
    }

    // Execute query
    const {loading, error, data} = useQuery(GET_EARTHQUAKES,{
        pollInterval:300000 // Repeat query every 5 min
    })

    if (loading){
        return 'Loading...'
    }
    if (error){
        return `Error! ${[error.message]}`
    }
    return(
        <div className="flex flex-row">
        <EarthquakeList earthquakes={data.getEarthquakes.features} handleButtonClick={handleButtonClick} handleHover={handleHover}/>
        <EarthquakeMap earthquakes={data.getEarthquakes.features} handleButtonClick={handleButtonClick} handleHover={handleHover} hoverCode={hoverCode}/>
        
        {/* Render modal when Details button is pressed and earthquake data is available  */}
        {showModal && earthquakeData && (<Modal show={showModal} onClose={handleCloseModal} earthquakeData={earthquakeData} />)}
       </div>
    )

}