import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { EarthquakeListProps } from "./EarthquakeList";
import { EarthquakeDataProp } from "./Earthquake";

// Fromat of input to EarthquakeMap
type EarthquakeMapProps = EarthquakeListProps & {hoverCode: string}

/**
 * ABOUT THIS COMPONENT
 * This is the map used to show where all the earthquakes provided in the input are located in the world.
 * @param earthquakes: A list of objects (of type EarthquakeDataProp). Each object represents an earthquake 
 *                      to be visualised on the map. 
 * @callback hoverCdoe: A string representing the code (unique identifier) of the earthquake to be highligheted.
 *                      The value can be an empty string '' if no earthquake marker is to be highlighted
 * @returns A react leaflet map with markers for each earthquake provided in the input.
 */

export default function EarthquakeMap({earthquakes, hoverCode} : Readonly<EarthquakeMapProps>){

    // All unhovered earthquakes are more opaque (less visible)
    const opacity = 0.5

    return(
        <MapContainer center={[0,0]} zoom={2} scrollWheelZoom={true} className="hiden sm:h-screen sm:w-screen z-0">
            <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

            {earthquakes.map((earthquake: EarthquakeDataProp) => {
                    if (hoverCode === earthquake.properties.code) {
                        // Hovered
                        return (
                        <Marker opacity={1.0} key={earthquake.properties.code} position={earthquake.geometry.coordinates.slice(0, 2).reverse() as [number, number]}>
                        <Popup>
                            <p>{earthquake.properties.title}</p>
                            <p>Magnitude: {earthquake.properties.mag} {earthquake.properties.magType}</p>
                            <p>Depth: {earthquake.geometry.coordinates[2]}</p>
                        </Popup>
                        </Marker>
                    );
                    } else {
                        // Unhoverd 
                    return (
                        <Marker opacity={opacity} key={earthquake.properties.code} position={earthquake.geometry.coordinates.slice(0, 2).reverse() as [number, number]}>
                        <Popup>
                            <p>{earthquake.properties.title}</p>
                            <p>Magnitude: {earthquake.properties.mag} {earthquake.properties.magType}</p>
                            <p>Depth: {earthquake.geometry.coordinates[2]}</p>
                        </Popup>
                        </Marker>

                )}
            })}
        </MapContainer>
    )
}