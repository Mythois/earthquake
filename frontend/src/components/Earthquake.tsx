import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"

import format from "date-fns/format"
  
// Structure of the earthquake data used by the Earthquake component
export type EarthquakeDataProp = {
    properties:{
        place:string
        title: string
        time: number
        magType: string
        mag: number
        code:string
    }
    geometry:{
        coordinates:[number, number, number]
    }
}

// The structure of the input to the Earthquake component
type EarthquakeProps = {
    data: EarthquakeDataProp    
    handleButtonClick: (earthquakeData: EarthquakeDataProp) => void   // Callback function that passes earthquake data to modal when btn is pressed
}

/**
 * This component represents a single earthquake.
 * It displays some of the data associated with the earthquake such as the magnitude,
 * time and place in the form of a card.
 * The component has a button that allows the user to a details page where he can get an overview over more data
 * and add comments and save the earthquake (not yet implemented)
 */

export function Earthquake({data, handleButtonClick}:EarthquakeProps){
    const time = data.properties.time

    // Change time to human readable form
    const date = new Date(time)
    const dateTime = format(date, 'yyyy-MM-dd HH:mm:ss zzz')

   
 

    return(
        <Card className="w-full space-y-0.5 rounded-none">
            <CardHeader className="-mb-6">
                <CardTitle className="text-base text-center">{data.properties.place}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-1 ">
                <div className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground font-medium">{dateTime} </p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-sm">Magnitude</h2>
                    <p className="text-sm text-muted-foreground font-medium">{data.properties.mag} {data.properties.magType}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={() => handleButtonClick(data)}>Details</Button>
            </CardFooter>
        </Card>
    )

}