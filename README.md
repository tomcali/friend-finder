# friend-finder
Week 13 Homework: Friend Finder

## Overview
This assignment concerns node.js and express.js and their use in a web-browser-based and Heroku-hosted application.

I work through most of the instructions for the basic assignment, creating a database of possible friends and implementing the components of this client-server application. 

Set up the structure of the hosted app and hosted database and began testing. 

## Viewing the App
The GitHub repository shows the work on the assignment. 

## Requirements
The requirements for this assignment may be found in the file homework_instructions.md, which is enclosed in the repository. 

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
Gathered photographs for various celebrities from the web and entered those images into the JSON document array, changing information about names and ages in the process.
* Set up a mlab-hosted MongoDB database with the information for the 40 potential friends.
* 
* 
* Executed initial testing under node.js
  

## Application Testing

