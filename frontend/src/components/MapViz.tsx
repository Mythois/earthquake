import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

type MapVizProps = {
    latitude: number;
    longitude: number;
  }

export default function MapViz({latitude,longitude}:Readonly<MapVizProps>){
    const position = [latitude, longitude]

    return(
    <MapContainer center={position as [number,number]} zoom={13} scrollWheelZoom={true} className="h-3/5 w-3/5">
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
        <Marker position={position as [number,number]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>        

    )
}