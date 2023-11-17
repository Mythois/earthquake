import { MapContainer, TileLayer } from "react-leaflet";

export default function Map(){
    const position = [51.505, -0.09]

    return(
    <MapContainer center={position}>
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
    </MapContainer>        

    )
}