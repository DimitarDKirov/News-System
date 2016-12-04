# Awesome News System 3000

## Project aim
The aim of the project is to give our users the latest news from many sources as soon as they are published. Users can filter the media they prefer and receive information from the sources they prefer.

## Project information
The project consists of two parts - server and requester which run in parallel. The requester makes regular requests to newsapi.org and updates our database. At the same time the server provides the services to our users.

## Users
#### Normal access 
#### Registered - options to leave a comment, like the article and read it later and filter articles by source

## Routes
#### Normal access
/home -> every user regardless if they are registered or not can view the latest news from all our sources in convenient form;

/article-details -> displays detailed information about the given article. If user is logged in, he/she has the option to add the article to their favourite articles and to comment them

/search -> displays the results of the search query based on the user input

/about -> displays information about the creators

#### Registered users
/user/profile -> displays user profile

/user/favourite-articles -> displays the articles the user has liked

/user/select-media -> gives the ability to filter the displayed information about media source

## Team Members 
#### [Milena Stancheva](https://github.com/MilStancheva)
#### [Bozhidar Boevski](https://github.com/kjifw)
#### [Martin Jordanov](https://github.com/mkjordanov)
#### [Dimitar Kirov](https://github.com/DimitarDKirov)

## Project Dependencies
#### [News API](https://newsapi.org)
#### Node
#### Express
#### Pug
#### Mongodb
#### Mongoose
#### Passport
#### Request
#### Mongoose-paginate
#### Bootstrap
#### Crypto
#### Toastr
#### Eslint
#### Typings

## How to use locally
* Clone or download
* Register free at [News API](https://newsapi.org) to get a key and insert it in the config file
* Run ```npm install``` in the root directory
* Run ```npm start``` to start the project locally
* Connect to localhost:3001 to see the magic at work :)