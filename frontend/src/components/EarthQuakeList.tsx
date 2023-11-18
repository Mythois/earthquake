/**
 * A component that lists every earthquake recorded in the past hour
 */

import { GET_EARTHQUAKES } from "@/utils/queries/getEarthquakes";
import { useQuery } from "@apollo/client";



export function EarthquakeList(){
    const {loading, error, data} = useQuery(GET_EARTHQUAKES,{
        pollInterval:300000 // repeat query every 5 min
    })

    if (loading){
        return 'Loading...'
    }
    if (error){
        return `Error! ${[error.message]}`
    }
    
    return (
       <div className='w-1/5 h-full border-solid border-2'>

       </div>
    )
}