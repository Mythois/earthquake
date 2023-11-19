import gql from 'graphql-tag'

/**
 * ABOUT THIS FILE
 * typeDefs  defines the structure that is expected from the data that is returned by the queries.
 * Here the expected structure is that of a geoJSON file
 */

const typeDefs = gql`
  type Properties {
    mag: Float
    place: String
    time: Float
    updated: Float
    url: String
    detail: String
    felt: Int
    cdi: String
    mmi: String
    alert: String
    status: String
    tsunami: Int
    sig: Int
    net: String
    code: String
    ids: String
    sources: String
    types: String
    nst: Int
    dmin: Float
    rms: Float
    gap: Float
    magType: String
    type: String
    title: String
  }

  type Geometry {
    type: String
    coordinates: [Float]
  }

  type Feature {
    type: String
    properties: Properties
    geometry: Geometry
    id: String
  }

  type Earthquakes {
    features: [Feature]
    bbox: [Float]
  }

  #--------------
  # Queries
  #--------------
  type Query {
    getEarthquakes: Earthquakes
  }
`

export default typeDefs
