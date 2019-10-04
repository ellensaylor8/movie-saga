# Movie Library
This application lists movies along with their title and descriptions and allows user to update these details stored in a Postico database

## Screen Shot
![Screen shot of project](https://github.com/ellensaylor8/movie-saga/blob/master/public/images/screen_shot.png)

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [PostrgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation/Setup
1. Create a database in Postico named [your database name]
2. Within Postico, execute the sql found in database.sql. This should set up all tables and insert all data necessary to spin up project
3. Within your GUI run `npm install`
4. Run `npm run server` to start up express server
5. Run `npm run client` to start up front end in browser (should automatically open new browser tab for you)

## Usage
1. Select the `Details` button on any of the movie cards to navigate to a detail page with a full description of the respective movie
2. Within the Details page, select `Edit` to change either the title or description of the movie
3. If you are happy with your edit, selecting save will update this data in the database and navigate you back to the home page to view your updated title/description

## Built With

- React
- Material UI
- Express

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) in Kansas City for teaching me the tools necessary to stand up this application!