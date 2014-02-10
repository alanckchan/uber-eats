uber-eats
====

An extremely simple web app which allows you to see food trucks near a selected location.

Hosted at http://ubereats.herokuapp.com

How to Use
----
Clicking anywhere on the map will load and display a set of food truck markers within the bounds of the current map viewport. Selecting different points of the map will load different results if there are any available food trucks within range. The user selected marker will be bouncing to signify that it is the user selected marker.

Clicking on a food truck marker will show the details of the food truck location including the name and details.

Code Organization
----
####Server-Side
* app/controllers - implementation for routes
* app/models - mongoose model definitions
* app/routes - URL endpoint definitions
* app/views - jade templates
* config - configuration properties
* tasks - grunt tasks

####Client-Side
* public/css - stylesheets
* public/js - app javascript
* public/lib - third party javascript

Endpoints
----
* GET /food-trucks - Gets all food trucks with only name and location properties
* GET /food-trucks/:id - Gets a single food truck with all properties
* GET /food-trucks/find/near?lat=X&lng=Y&distance=Z = Gets a list of food trucks within the specified distance of lat and lng.

Grunt tasks
----
* db-seed-data - Pulls food truck data from DataSF and populates mongodb

Server Stack
----
* Heroku
* nodejs
* express
* MongoDB
* mongoose

Client-Side Stack
----
* AngularJS
* Bootstrap
* jQuery
* Google Maps for AngularJS

Final Thoughts
----
* Tests should be added using a combination of karma and mocha
* A more thorough evaluation and discussion should be made/had with regards to server requests for loading location data and scalability.
