# friendfinder
<h1>My FriendFinder App</h1>

<p>The FriendFinder app was definitely a challenging one for me. I understood most of the o basic mechanics of get and post, but bridging the gap from post results back to an html page was definitely challenging. Overall, I got the app to function, all be it with a pretty lackluster UI. Regardless, the App functions as follows</p>
<hr>

<h3>Server.js</h3>
<p>The First thing that the app reads is the server.js file. The file only performs a few things, but they are essential to the functionality of the rest of the app. The server does the following.</p>
<ul>
    <li>requires the necessary npm package (express) </li>
    <li>links to the js files that are used for routing</li>
</ul>

<h3>htmlRoutes.js</h3>
<p>The next thing that execcutes in the code is the htmlRoutes javascript file. Inside that file the following things happen</p>
<ul>
    <li>requires the npm package "path" which helps the sendFile function by joining the string data</li>
    <li>Exports the url paths back to the server.js so that the default route loads the home.html file and the /survey route loads the survey.html file</li>
</ul>

<h3>Public Html Files</h3>
<p>The two public html files are home.html and survey.html. The home.html file is just some bootstrap UI stuff with no real added functionality apart from linking to the "/survey" url with the survey button. The survey.html file, however, has a bit more going on. Apart from the survey itself, the file contains a javascript snippet that handles the following functionality.</p>
<ul>
    <li>A click event on the submit button that grabs all the data from the survey and pushes it into a new object called newFriend</li>
    <li>Posts the newFriend object to the "api/friends" url</li>
    <li>rewrites the modal text to match the data that is send back from apiRoutes.js file<li>
</ul>

<h3>apiRoutes.js</h3>
<p>This file, in my opinion, required the most finessing. It handles all of the url routes as well as the get and post requests. In line order, the code performs the following functions</p>
<ul>
    <li>pulls in the array of data from the friends.js file and stores it a variable</li>
    <li>sends the json data to the /api/friends url</li>
    <li>sets up the logic for when a post request is made against the /api/friends url (where the following things happen)</li>
    <li>grabs and stores the body of the request (i.e. what you are posting) and then parses out the array of scores and stores it in a second variable</li>
    <li>sets up empty string variables for the future name and image url</li>
    <li>runs a loop with a nested loop within it that goes through the data in the friends.js data array (and therefore in /api/friends) and then subtracts the users scores to the corresponding question. The nested loop ensures that the user's scores are run against EACH of the previously entered friends data</li>
    <li>Determines which differential is the lowest and stores the name data and image url string for that specific index</li>
    <li>pushes the new user to the overall friendsData so that it can be used as a comparison on future posts</li>
    <li>dumps out the matchname and matchimage so that the survey.html js snippet can grab it</li>
</ul>

<p>That is pretty much the app in a nutshell. The trickiest part for me was understanding exactly how the files interacted with eachother, especially the snippet in apiRoutes.js that pushed out the matchname and matchimage data. Once I figured out how to make all the files talk to eachother, the rest fell into place.</p>