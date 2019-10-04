# Movie Library
This application lists movies along with their title and descriptions and allows user to update these details stored in a Postico database

## Screen Shot
![Screen shot of project](https://github.com/ellensaylor8/movie-saga/blob/master/public/images/avatar.jpeg)

## Screen Shot

## Database Setup
Database named `saga_movies_weekend` set up in Postico. Reference database.sql to view setup, tables, queries and input values.


### Home / List Page

Displays movie library with button to navigate to details per film

### Details Page

Shows details of film and allows user to return to home page or navigate to edit page to update title and/or description of film.

### Edit Page

Allows user to edit title and description of movie. Clicking save sends update to database and re-renders updated details. Clicking save returns user to detail page with no changes sent to database.

## To-Do

- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
