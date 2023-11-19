import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { EarthquakeListProps } from "./EarthquakeList";
import { EarthquakeDataProp } from "./Earthquake";




export default function EarthquakeMap({earthquakes} : EarthquakeListProps){

    return(
        <MapContainer center={[0,0]} zoom={2} scrollWheelZoom={true} className="hiden sm:h-screen sm:w-screen z-0">
            <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

            {earthquakes.map((earthquake:EarthquakeDataProp) =>
                <Marker key={earthquake.properties.code} position={earthquake.geometry.coordinates.slice(0,2).reverse() as [number,number]}>
                    <Popup>
                       <p>{earthquake.properties.title}</p> 
                        <p>Magnitude: {earthquake.properties.mag} {earthquake.properties.magType}</p>
                        <p>Depth: {earthquake.geometry.coordinates[2]}</p>
                    </Popup>
                </Marker>
                )}
            

        </MapContainer>
    )
}