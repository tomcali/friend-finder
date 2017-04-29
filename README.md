# friend-finder
Week 13 Homework: Friend Finder

## Overview
This assignment concerns node.js and express.js and their use in a web-browser-based and Heroku-hosted application.

I work through most of the instructions for the basic assignment, creating a database of possible friends and implementing the components of this client-server application. 

Set up the structure of the hosted app and hosted database and began testing. 

## Viewing the App
The GitHub repository shows the work on the assignment. 

## Requirements
The requirements for this assignment may be found in the file homework_instructions.md, which is enclosed in the repository under documentation/homework-13-Express. 

## Technologies Used
* Git/GitHub
* node/npm with initial npm init to set up package.json
* node.js packages website and database servers 

## Coding Process 
* We start with GitHub, setting up the repository for the application 
* Clone the repository and set up the files required for this assignment, including .gitignore. 
* npm init to set up package.json with the ability to add packages/modules with npm init -y
* Added numerous node packages with npm install --save [package-name]
* Set up application directories following the specification from the homework instructions, except that we have a repository/directory called "friend-finder" instead of "FriendFinder" and we have a directory of background documentation:

  ```
  friend-finder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - documentation
    - node_modules
    - package.json
    - server.js
  ```
A running app at https://friend-finder.herokuapp.com/  provided a head-start on the coding of selected components of the application. The index.html and server.html files were particularly useful. The original files from the demo app are included under documentation. Bootstrap, Font-Awesome, and Chosen CSS files were also part of this demo, and we followed a similar style in the development of our node/express/MongoDB app. In other words, the front-end design portion of the app was essentially a clone of the demo app.


* Utilized http://www.json-generator.com/ to generate 40 potential friends using the following specification for each JSON document:

```
[
  '{{repeat(40)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    name: '{{firstName()}} {{surname()}}',
    photo: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    gender: '{{gender()}}',
    scores: [
      '{{repeat(10)}}',
      '{{integer(1, 5)}}'
    ]
  }
]
```
Gathered URLs for images of various celebrities from the web and entered those images into the JSON document array, changing information about names and ages in the process. The survey responses, of course, were those from the JSON generator. 
* We could have set up a mlab-hosted MongoDB database with the information for the 40 potential friends. Or we could have used MySQL. But the assignment did not call for data persistence or an outside database server. Our approach was to use node.js export/require to bring in the celebrity data.
* We set up the structure for much of the app, with display of the home screen and survey screen. 
* Respondent survey data collected did not have a photo or age and gender, so were slightly different from the celebrities. The critical component for matching was the survey responses, so these differences should not matter.
* Ran into difficulites in passing data from the survey to the server from the modal. Not sure how to fix this. Set up a file called respondents under public, but this may not be the best way to proceed here. 
* Too bad I didn't get this to work further. Spent a lot of time gathering those celebrity images for the final display of matches.... so be it.
  

## Application Testing
Executed partial testing under node.js and on the client/browser. Still much to do to get all the pieces to work together.

Getting 404 error on the submission of the survey:
POST http://localhost:3000/respondents 404 (Not Found)

I had set up a file named respondents under the public directory... but that does not seem to be what is needed here. 

Not sure how these directory entries fit into the picture:
```
[
	- routing
        - apiRoutes.js
        - htmlRoutes.js
]
```