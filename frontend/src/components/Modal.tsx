import { format } from "date-fns";
import { EarthquakeDataProp } from "./Earthquake";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";


type ModalProps = {
    show: boolean
    onClose: () => void
    earthquakeData: EarthquakeDataProp
}


export function Modal({show, onClose, earthquakeData}: ModalProps){
    const time = earthquakeData?.properties.time 

    // Change time to human readable form
    const date = new Date(time)
    const dateTime = format(date, 'yyyy-MM-dd HH:mm:ss zzz')

    return(
        <AlertDialog open={show} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{earthquakeData?.properties.title}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription className="flex flex-col space-y-0.5">
                    {dateTime}
                    <span><b>Location</b></span>
                    <span>Longitude:  {earthquakeData.geometry.coordinates[0]}</span>
                    <span>Latitude: {earthquakeData.geometry.coordinates[1]}</span>
                    <span><b>Depth:</b> {earthquakeData.geometry.coordinates[2]}</span>
                    <span><b>Magnitude: </b>{earthquakeData.properties.mag} {earthquakeData?.properties.magType}</span>
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}