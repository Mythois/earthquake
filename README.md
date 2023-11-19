# Earthquake viewer

## About this project

Earthquake viewer is a webapplication that shows the earthquakes recorded in the past hour and displays them on a map of the world.
The user is able to scorll through all the recorded earthquakes using a list on the left side of the screen, while simultaneously
viewing the earthquakes on the map. Hovering over an item / earthquake in the list will highlight the corresponding marker on the map.
Each item in the list has a "Details" button that, when pressed, results in a modal showing up. The modal presents more data about the selected earthquake.
Selecting any of the markers on the map, will reveal a little popup that holds additional information.
Resizing the application to mobileview will hide / remove the map, so that on small screens only the list of earthquakes is available, including the modal.

- The earthquake data is gathered from https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson.
- The map used is gathered from https://www.openstreetmap.org/copyright.

### Frontend

- The front end part of this project was setup using vite (https://vitejs.dev/).
- Furthermore, to speed up development a component library called shadcn/ui was used (https://ui.shadcn.com/)
- Styling was done using tailwind (https://tailwindcss.com/)
- To comunicate with the backend apollo client was used. (https://www.apollographql.com/docs/react/)

### Backend

- The backend was setup as a normal node project (node init)
- To fetch data apollo server with graphql was used. (https://www.apollographql.com/docs/apollo-server)

## How to get started

1. Clone the repository
2. Open the repository in your favourite code editor (for example vscode)
3. In a terminal, in the root folder of the project run npm install
4. In the same terminal run npm run backend
5. In a new terminal, again from the root folder of the project, run npm run front.

- The backend server should be available at http://localhost:4000/
- The frontend should run http://localhost:5173/
