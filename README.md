To add a new character using Postman:

- Use method POST
- Call for the url: http://localhost:3006/movies/
- Select the function "Body", select raw and then to the right choose JSON
- In Postmans editor, use JSON formation to enter your chosen value, for example:
  {
    "movie"{
      "Title": "Movie name",
      "Year": "The release year"
    }
  }

- Press "Send"
The movie should show underneath. To double check that it has been added to the list of movies, simply switch the method to GET, and you should see that the movie is in fact in the list with it's friends. 

Use the data from previous steps to find more values related to the objects.
The value for imdbID is randomized, so you don't need to add a value to that tag.
