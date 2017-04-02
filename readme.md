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
* Used Balsamiq for wireframing - please screen shot below:
* Used Trello for my project board - please see the screen shot below:

![Trello](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/Trello-Project-2.png?raw=true "Trello")

* Used Balsamiq for my wireframing:

![Balsamiq](https://github.com/1Guv/WDI-25-Project-2/blob/master/src/assets/images/Balsamiq-Project-2.png?raw=true "Trello")