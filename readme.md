##GA WDI 25 London - Project 3

#SpeakEasy

The third project of the Web Development Immersive course was a group assignment with three other students. Our goal was to design and create a MEAN stack web application through successful team collaboration.

We were all inspired by the idea of a platform for users to meet each other and exchange skills. However, as all four of us are from different cultures, we later switched our focus to language exchange.

####The result is... SpeakEasy ([click to use app](https://speak-easy-app.herokuapp.com/))

![](src/images/welcome.png)

###User Interaction

SpeakEasy provides a platform for users to find language exchange partners. A user must be willing to teach other users the language they speak in exchange for learning another. For example, a user speaks English and wants to practice speaking French. They can use SpeakEasy to look for a language exchange partner who speaks French and wants to improve their English.

Once logged in, users can search through other users by language, or filter users by distance on a map, then read a user's reviews and ratings before deciding to message that user. The message is sent directly to the recipient's email address.

![](src/images/index.png)

***

###Wire Framing

We stuck closely to the original wire frame planning.

![](src/images/wireframes.png)

***

###How it works:

* Users can register in the usual way or using GitHub or Facebook OAuth.
* Logged-in users can view other users, either in an indexed list or plotted on an embedded Google Map.
* ng-filter is employed so users can be searched for by specific languages.
* Users on the map can be filtered by distance from current location using a distance-calculating function (distance between the two lat,longs) and Google Circle to visualise the distance.
* Users can read user reviews left by other users. These include a 1 to 5 star rating. Users can delete their own reviews.
* Users can send a message to another user if they are interested in meeting for a language exchange. This message is then emailed to the recipient's personal email address using a Node module called Nodemailer.
* Messaging other users is locked by default after registration. There is an attribute in the profile called locked: true. This is set to false when a user fully updates their own profile with image and language info, unlocking messaging.



####The build:


* For the project we used a full express RESTful app that includes token authentication.
* Used Node, Express, Ajax, JSON, JS, MongoDB, HTML 5, SASS and Angular were used to create the app.
* Used Google Map API to show users on the map, show the raduis and Geolocation when registering.
* Used NodeMailer to send emails to users.
* Used Amazon Web Services for storing images securely.
* Created directives for:
	* Google Autocomplete when users register their address
	* base64 encoding and decoding for images
	* Google Maps
		* showing the appropriate Markers using the Lat & Lng for each user registered.
		* showing the Google Map Info windows with the correct data.
		* showing the Google Map Circle Radius.
		* finding the distance between two points
* Used Satellizer to create token-based authentication for Facebook & GitHub.
* Used Angular Material for designing the forms.
* Used Angular features like:
* 	ngFilter for searching and displaying the correct information.
* 	ngMessages for the form validation and providing the user with responsive error messages.
*  ngIf for user authentication on the front end to show & hide the messaging options.


##Problems & Challenges:

The first problem we encountered as a group was deciding who should build the API. Once we had decided on a project and developed a wire-framed scope, we sat together and worked through building the API together as a group on a big screen. This allowed us to work quickly on building the backend foundations. After that we divided all tasks into small chunks and listed everything on Trello, working through each task individually or in pairs.

NodeMailer was challenging. Following documentation for the first time was confusing, but I found an online tutorial video and adapted the code in the video to get everything working. One of my team members struggled with Angular Material design, as it conflicted with out pre-existing form validation. Another team mate worked with him to overcome blockers.

There was one day we early in the project when we had multiple confusing merge conflicts from two of us working on the same file. This was part of the learning process of Git collaboration for us. After that we started talking about which files we were working on in our daily team stand-up, not just which task.

Our main blocker was time. With so many tasks needing attention, we had to work effectively as a group to decide which tasks would be implemented and which tasks would be left on the backlog for future implementation. Keeping pace of our progress through daily stand-ups and constant communication was key to our group delivering a finished product in time.


###Future Improvements

I would like to make the following improvements to this app...

- Use "Select 2" autofill module for adding new languages to the database, to avoid duplication.
- Apply a few modals e.g. for comment deletion.
- Improve confirmation notifications when a user sends a message.
- Separate the map, and user index listing using tabs.
- Style the email messages and add a logo.
- Improve the colour theme throughout the app.
- Improve responsiveness.
- Improve the index (before login) with a background image or video.
- Use Web Sockets to apply realtime user messaging through the site.
