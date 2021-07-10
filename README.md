# Gist Listing App

Gist Listing App is a web app developed mainly using react

## Usage

To use it simply input the desired git username inside the searchbar and hit either enter or the search button and all gists created by that user will be listed below with the title of the first file inside the gist as well as the last 3 forks and the tags related to the filetypes.

## Highlights

Here I'll display what in my opinion is worth mentioning.

First of all, all the requirements were met:
**-Search**: By typing a git name inside the searchbar and hitting enter, a call to the gist api will be made with that username and all their gists will be returned.
**-Tags**: The tags implementation is done by placing all filetypes of a certain gist inside a HashMap where the key is the name and the value is the color representing that filetype, which was done using a hashing algorithm (that I stole from stackoverflow, but the idea was original and cool you have to admit it)
**-Forks**: The usernames of the last 3 users that forked the gist are displayed here, or 0 if there are none (I could have chosen to display the avatar as well which wouldn't have been hard but this way it looked nicer)
**-Gist Contents**: The content of the gist can be displayed by clicking the title of a gist card which will open a tab to the gist. (Here I assumed that the reuirement didn't want a modal, if it was otherwise I would be happy to explain that approach as well)
**-Styling**: I tried to use the best approaches when coming to styling, used flex for a lot of components.

Moreover, I will go into detail of some of my work:
**-React:**: I chose React as my go-to frontend library because it's the one I am experienced with. I designed the application first by imagining the layout and then dissecting for components in my design choosing the most clean approach I could see.
**-Api calls:** Calls to the API were made using AXIOS, a library that I worked with before. The calls could have been done with a simple fetch as well but I wanted to show I know more libraries :D
**-Tags Logic:** I used a pretty neat logic for the tags section: I implemented a HashMap in which I added all the filetypes found on a certain gist, thus avoiding duplicates, but the most cool part is that I used a hashing algorithm to store a color depeding on the string of the filetype, thus saving memory and time by not having to manually write a color for every language known to man.
**-Search Logic:** I know this doesn't seem that much but implementing the functionality that the search should only be called upon on enter of the text input in React is something I helped a lot of friends with.

## Further Development

Because of the time limit I was not able to implement the best versoin of the application that I first thought of, so I will describe here some improovements that can be made in the future.

**-Landing Page:** Before any user is searched the application should give a hint on how to use the search functionality
**-User Infomration:** After searching a user, if it's a valid one, it's information should be displayed somehwere on the page
**-Exerpt:** This is a functionality I will admit I spent some time trying to implement it before coming to the conclusion it would waste too much time while other thing were more importnat. A gist exerpt can be added in the futere presenting a preview of the gist. The application is scalable so if this would be wished to be implemented further the card component would just recieve another div where this exerpt would be placed in.
**-Stars/Comments:** The gist api allows for CRUD operations on gists, as well as giving a star to a gist or commeting.
**-Filtering:** Filtering by certain filetypes should be fairly easy to implement