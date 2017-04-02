# SpeakEasy - Meet up. Speak up. Language exchange...

######GA WDI-25 London - Project 3:

Our idea encompasses the current meetup phenomenon where it allows two individuals to meet and share a skill, eg if i wanted to improve my French I could use this app to find a native French speaker and offer to share a skill in return. Once registered, and then logged in, they can search for a skill and see the profiles of those users on a map. The map will show how far others are from your current location and you can also filter by distance.

The user can login via Facebook or GitHub and you are only able to contact another user once you have fully registered eg filled out a full profile with a skill to share. Otherwise there will be a message asking the user to register. Once registered each user profile and messaging becomes unlocked so the current logged in fully registered user has full access to use the site.

[Check it out here - SpeakEasy - Meet up. Speak up. Language exchange...](https://www.google.co.uk/?gws_rd=ssl)

![SpeakEasy - homepage](https://github.com/1Guv/WDI-25-Project-3/blob/master/src/images/SpeakEasy-screenshot2%20copy.png?raw=true "SpeakEasy homepage screen shot")

![SpeakEasy - Search](https://github.com/1Guv/WDI-25-Project-3/blob/master/src/images/SpeakEasy-screenshot1%20copy.png?raw=true "SpeakEasy Search with Map")

##Approach / How it works:

* When you enter the website you will need to register to get access.
* Once registered you can view the current profiles and view users on a map.
* However to contact anyone you will need to register fully to unlock all the features.
* We used a ng-filter to dynamically update the page & map for whatever skill that you searched for.
* You can click on the profile picture of the user and see more details about the inidividual.
* We used node-mailer so you can send a message to the user which will go directly to their email address.
* You can also use the scroll bar to increase or decrease the distance between your current location and user profiles so you can quickly view who is the closest.
* Once you have met and exchanged a skill you can review the user by selecting a star rating and providing a short review.

##The build:


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

* Used Balsamiq for wireframing - please screen shot below:

![Balsamiq](https://github.com/1Guv/WDI-25-Project-3/blob/master/src/images/SpeakEasy-Balsamiq-Wireframe?raw=true "Balsamiq")

* Used Trello for my project board - please see the screen shot below:

![Trello](https://github.com/1Guv/WDI-25-Project-3/blob/master/src/images/SpeakEasy-TrelloBoard.png?raw=true "Trello")

##Problems & Challenges:


During the project we encountered many problems and as a team we dealt with all of them very effeciently. Initially we did a group programming excercise where we developed the core product and reduced any GIT conflicts to a minimum. Once the core routes, controllers and the initial setup had been established we then listed out the other tasks via Trello and paired programmed the majority of them in two sub teams.

NodeMailer was an early challenge, and we implemented this successfully. The Google Maps API for the radius was also a good challenge and gave us the added functionality that we were thinking of. Another team member researched into Angular Material and provided the extra animation for all the forms for the app. 

The main blocker was time, so many things needed attention so we used Trello to document the most important tasks for MVP knowing that we could add the extra functionality once that had been completed. I also managed the team to a large extent and I beleive that my organisational and excellent time management skills gave us the edge on this project.

##If I had more time I would:

- To use more UI Bootstrap features eg Modals.
- Provide more user friendly notifications when a user sends a message to others.
- To have a separate map and profile listings page.
- To use realtime communications viia the app to each user using web sockets instead of offline email comms.
- Experiment with the color theme throughout the app.
- Make it fully responsive.
- Using RegEx to capitalising various outputs.
- We were thinking of having a video as our homepage but did not get time to find the right video.
- Styke email messages with our logo in the footer.
- Allow user to delete profile with confirmation modal.
- Show profile image in the top right when a user is logged in.

