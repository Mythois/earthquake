import { gql } from "@apollo/client";


// The gql string used to by the apollo client to ask to query data
export const GET_EARTHQUAKES = gql `
    query GetEarthquakes {
        getEarthquakes {
            features {
            properties {
                place
                title
                time
                magType
                mag
            }
            }
        }
}
`