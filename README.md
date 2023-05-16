Hello and welcome to my CRUD experiment. Come along on an adventure to explore CRUD.
Follow the instructions for the ultimate experience!

Clone the project from the link and run "npm run dev" in the terminal:
https://github.com/Excaliderp/node_assign1

Download, install and start Postman.


ACCESS THE SERVER:
After booting up the client server, set postman method to GET, paste:
http://localhost:3006/
And press send. If you get the text "Hola Amigo!" in the field underneath, the server works and you're in!

We use the GET method to retrieve data from a server, in this example, the data from a specific URL.
The server then returns the data we requested.


ACCESS THE API:
Keep the method on GET, extend the URL to:
http://localhost:3006/movies

When you press send, you'll get a 401 Unauthorized. This means you can reach the API, but you need an API key to access it.


ADD API-KEY:
Postman is great in the way where it has it's own GUI to add a parameter to the URL. This is excellent, since it's what we need to add the API key

In the field "Key", simply add "apiKey" (caps sensitive), and in the "Value" field put "1337", which is the default API key. You should now get a long list of movies, funilly enough containing the word "Bond".


LOOK UP DATA OF A SPECIFIC MOVIE:
To find the data of a specific movie, we need to add an ID to the URL.
To add an ID to the URL, simply put a value after /movies, e.g:
http://localhost:3006/movies/:id?apiKey=1337

Using the GET method and recieving the list of movies, you'll see that every movies has an "imdbID" value, this is the movies individual ID.
Replace ":id" in the URL with either of these ID's to see the magic happen:
tt7521000
tt0297197
tt3136962


ADD YOUR OWN MOVIE:
To add an movie to the list, we're going to use the method POST.
Call for the url: http://localhost:3006/movies?apiKey=1337
Select "Body" instead of "Params", select raw and then choose JSON where is says text.
In order to add a movie, include following data to the Postman body-editor:
{
"Title": "Movie name",
"Year": "The release year",
"Released": "The release date"
"Genre": "The genre"
}

Press "Send". The movie you added should show underneath in the same formation you used. To check that it has been added to the list of movies, simply switch the method back to GET, and you should see that the movie is in fact in the top of the list with it's friends.

You are welcome to add more fields, but the ones provided are REQUIRED. Year can only contain numbers, and it has to be four numbers.

We use the POST method send new data to the server, in this instance creating a new movie object.


EDIT MOVIES DATA:
Another fun thing you can do with the imdbID is edit the data about the movies.
Using the method PUT and yet again calling for the URL:
http://localhost:3006/movies/:id?apiKey=1337

Using the same text formation as the previous step in the Body-field:
{  
"Title": "Bondend",
"Year": "2021",
"Released": "20 may 2021",
"Genre": "romance"
}

The fields are required here as well and are caps-sensitive, so make sure to get all the details right. Year can only contain numbers, and it has to be four numbers.

Replace ":id" with any "imdbID" from the movie list. To make it easier to notice the effect, I suggest editing the movie/movies you added in the previous part.

We use the PUT method tp update/edit/change data that already exists on the server. We need to use a sort of anchor, a way to identify specific objects on the server, for instance, an ID.


REMOVE MOVIES:
The last thing we'll do for now, again using imdbID is removing movies from the list.
Using the method DELETE, and again the URL:
http://localhost:3006/movies/:id?apiKey=1337

Replace ":id" with any imdbID (I again suggest the movie/movies you added earlier).
Postman will tell you which movie is removed, but to check for yourself, change the method to GET, remove the id (:id) from the URL and you'll again see the list of movies, and see that your movie/movies are no longer there.

The method DELETE is probably the most straigtforward. We use it to remove data from the server. Lite the PUT method, we need a way to identify the specific object we want to remove.


ADD A NEW API KEY:
To add your very own API key, use the method POST and call the URL:
http://localhost:3006/addApiKey.

You'll get a randomized key to use at your disposal.

To check the list if existing keys, simply switch the method to GET, use the same URL and you'll get a list of all the valid API keys. Yours should be on the bottom.


REMOVE AN API KEY:
To remove a valid API key, use the method DELETE and call for the URL:
http://localhost:3006/addApiKey/:id

Replace :id with a valid key from the list. Use the GET method again to see that the key is, in fact, missing from the list.
