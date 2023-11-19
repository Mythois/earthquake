import { GET_EARTHQUAKES } from "@/utils/queries/getEarthquakes"
import { useQuery } from "@apollo/client"
import { EarthquakeList } from "@/components/EarthquakeList"
import EarthquakeMap from "@/components/EarthquakeMap"


export function Frontpage(){
    const {loading, error, data} = useQuery(GET_EARTHQUAKES,{
        pollInterval:300000 // repeat query every 5 min
    })

    if (loading){
        return 'Loading...'
    }
    if (error){
        return `Error! ${[error.message]}`
    }
    return(
        <div className="flex flex-row">
        <EarthquakeList earthquakes={data.getEarthquakes.features}/>
        <EarthquakeMap earthquakes={data.getEarthquakes.features}/>
       </div>
    )

}