Hello and welcome to my CRUD experiment. Come along on an adventure to explore CRUD.
Follow the instructions for the ultimate experience!

Clone the project from the link and run "npm run dev" in the terminal:
https://github.com/Excaliderp/node_assign1

Download and install Postman.

Access the Server: 
  After booting up the client server, set postman method to GET, paste: 
  http://localhost:3006/
  And press send. If you get the text "Hola Amigo!" in the field underneath, the server works and you're in!

Access the API:
  Keep the method on GET, extend the URL to: 
  http://localhost:3006/movies

  When you press send, you'll get a 401 Unauthorized. This means you can access the API, but you need an API key to reach it.

Add API-key:
  Postman is great in a way where it has it's own GUI to add parameters to the URL. This is excellent, since it's what we need to add the API key

  In the field "Key", simply add "apiKey" (caps sensitive), and in the "Value" field put "1337", which is the default API key. You should now get a long list of movies, funilly enough containing the word "Bond". 


To add a new character using Postman:

- Use the method POST
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
