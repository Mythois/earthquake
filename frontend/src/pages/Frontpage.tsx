import { GET_EARTHQUAKES } from "@/utils/queries/getEarthquakes"
import { useQuery } from "@apollo/client"
import { EarthquakeList } from "@/components/EarthquakeList"


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
}