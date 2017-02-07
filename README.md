# MEAN application with AngularJS, ExpressJS, MongoDB, MySQL.

##Introduction

Basic MEAN application uses AngularJS, ExpressJS along with Mongo DB support (Mongoose) via a wrapper of Repository Pattern as Business layer.
The seed application is built over node and uses latest node packages.

## Prerequisites

1. Latest version of Node to be installed.
2. Install MongoDB or MySQL and make sure it is running on default port 27017.


## Steps to Run
```sh
    npm install          <= install all the npm Dependencies
    npm start            <= start server
```

## Directory Structure

```
meanApp
    ├── node_modules
    ├── app
    │    │
    │    ├── components
    │    │    ├── add-book
    │    │    │    ├── add-book.component.html
    │    │    │    ├── dashboard.component.ts
    │    │    ├── dashboard
    │    │    │    ├── dashboard.component.css
    │    │    │    ├── dashboard.component.html
    │    │    │    ├── dashboard.component.ts
    │    │    ├── book-detail
    │    │    │    ├── book-detail.component.css
    │    │    │    ├── book-detail.component.html
    │    │    │    ├── book-detail.component.ts
    │    │    ├── books
    │    │    │    ├── books.component.css
    │    │    │    ├── books.component.html
    │    │    │    ├── books.component.ts
    │    ├── services
    │    │    ├── book.service.ts            <= Book Service for fetching api
    │    │    ├── update-book.service.ts     <= Notify controllers when book added
    │    ├── assets
    │    │    ├── css
    │    │    │    ├── style.css
    │    │    ├── img
    │    │    ├── javascript
    │    ├── config
    │    │    ├── route
    │    │    │    ├── app.routing.js <= Angular routing
    │    ├── views
    │    ├── app.js
    │    ├── app.routing.js
    │    ├── index.html
    ├── public
    │    ├── stylesheets
    │    │    ├── style.css
    │    ├── imgages
    │    ├── javascripts
    ├── models
    │    ├── book.js
    ├── routes
    │    ├── books_mongodb.js  <= Book API with mongoDB
    │    ├── book_mysql.js     <= Book API with MYSQL
    │    ├── index.js
    ├── views
    ├── package.json
    ├── README.md

```

## Api Document (from MongoDB, MySQL)

```
1. getAll    http://localhost:3000/store/books             <= get all books
1. getById   http://localhost:3000/store/books/:id         <= get book by Id
2. post      http://localhost:3000/store/books                <= create book
2. put       http://localhost:3000/store/books/:id         <= update book
2. delete    http://localhost:3000/store/books/:id         <= delete book

```