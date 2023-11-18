import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"

import format from "date-fns/format"
  

type EarthquakeDataProp = {
    place: string
    time: number
    magType: string
    mag: number
}


/**
 * This component represents a single earthquake.
 * It displays some of the data associated with the earthquake such as the magnitude,
 * title and time and place in the form of a card.
 */

export function EarthQuake(data : Readonly<EarthquakeDataProp>){
    const time = data.time

    // Change time to human readable form
    const date = new Date(time)
    const dateTime = format(date, 'yyyy-MM-dd HH:mm:ss zzz')

    return(
        <Card className="w-full space-y-0.5 ">
            <CardHeader className="-mb-6">
                <CardTitle className="text-base text-center">{data.place}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-1 ">
                <div className="flex flex-col items-center">
                    <p className="text-sm text-muted-foreground font-medium">{dateTime} </p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-sm">Magnitude</h2>
                    <p className="text-sm text-muted-foreground font-medium">{data.mag} {data.magType}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Details</Button>
            </CardFooter>

        </Card>
    )

}