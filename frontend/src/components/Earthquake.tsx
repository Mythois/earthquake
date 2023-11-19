import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"

import format from "date-fns/format"
  

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


/**
 * This component represents a single earthquake.
 * It displays some of the data associated with the earthquake such as the magnitude,
 * time and place in the form of a card.
 * The component has a button that allows the user to a details page where he can get an overview over more data
 * and add comments and save the earthquake (not yet implemented)
 */

export function Earthquake({data}:Readonly<{data : EarthquakeDataProp}>){
    const time = data.properties.time

    // Change time to human readable form
    const date = new Date(time)
    const dateTime = format(date, 'yyyy-MM-dd HH:mm:ss zzz')

    return(
        <Card className="w-full space-y-0.5 ">
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
                <Button className="w-full">Details</Button>
            </CardFooter>

        </Card>
    )

}