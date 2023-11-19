import { GET_EARTHQUAKES } from "@/utils/queries/getEarthquakes"
import { useQuery } from "@apollo/client"
import { EarthquakeList } from "@/components/EarthquakeList"
import EarthquakeMap from "@/components/EarthquakeMap"
import { useState } from "react"
import { Modal } from "@/components/Modal"
import { EarthquakeDataProp } from "@/components/Earthquake"



export function Frontpage(){
    const [showModal, setShowModal] = useState(false) // Modal not shown by default
    const [earthquakeData, setEarthquakeData] = useState<EarthquakeDataProp | undefined>(undefined)
    const handleButtonClick = (earthquakeData: EarthquakeDataProp) => {
        // Make modal visible on button press
        setShowModal(true)
        setEarthquakeData(earthquakeData)
    }

    const handleCloseModal = () => {
        // Make modal invisible when closed
        setShowModal(false)
    }

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
        <EarthquakeList earthquakes={data.getEarthquakes.features} handleButtonClick={handleButtonClick}/>
        <EarthquakeMap earthquakes={data.getEarthquakes.features} handleButtonClick={handleButtonClick}/>
        {showModal && earthquakeData && (<Modal show={showModal} onClose={handleCloseModal} earthquakeData={earthquakeData} />)}
       </div>
    )

}