import axios from 'axios'

/**
 * ABOUT THIS FILE
 * The resolver handles the http request to the data source and return the result.
 * The returned result must match the structure defined in the backend/src/models/typeDefs.ts file.
 */

const resolvers = {
  Query: {
    getEarthquakes: async () => {
      try {
        const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson')
        const earthquakeData = response.data // geoJSON data of all the earthquakes registered in the past hour

        // Extract features and bbox from response
        const features = earthquakeData.features // Each feature represents one earthquake
        const bbox = earthquakeData.bbox // The bounding box for all earthquakes (collectively) registered

        const earthquakes = {
          features,
          bbox,
        }

        return earthquakes
      } catch (error) {
        console.error('Error fetching earthquake data: ', error)
      }
    },
  },
}

export default resolvers
