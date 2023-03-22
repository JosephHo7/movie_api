const express = require('express'),
    morgan = require('morgan');

const app = express();

// error = * 

//use morgan to log requests
app.use(morgan('common'));

//endpoint with documentation
app.use(express.static('public'));

//json array with movie data
let topMovies = [
    {
        "title": "The Fast and The Furious",
        "release date": "2001"
    },
    {
        "title": "The Godfather",
        "release date": "1972"
    },
    {
        "title": "The Shawshank Redemption",
        "release date": "1994"
    },
    {
        "title": "Schindler's List",
        "release date": "1993"
    },
    {
        "title": "The Wizard of Oz",
        "release date": "1939"
    },
    {
        "title": "Forrest Gump",
        "release date": "1994"
    },
    {
        "title": "The Sound of Music",
        "release date": "1965"
    },
    {
        "title": "Star Wars: Episode IV - A New Hope",
        "release date": "1977"
    },
    {
        "title": "E.T.",
        "release date": "1982"
    },
    {
        "title": "Gladiator",
        "release date": "2000"
    }
  ];

//endpoint with movie data
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

//endpoint with custom text
app.get('/', (req, res) => {
    res.send('Hello, this is my movie app!');
})

//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Send help, I broke');
})

//listen for requests
app.listen(8080, () => {
    console.log('Your app is running on port 8080');
});
