// Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up the server
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/comments', (req, res) => {
    const comments = [
        {
            username: 'Tammy',
            comment: 'Lol, that is so funny!'
        },
        {
            username: 'Jason',
            comment: 'I like to go birdwatching with my dog.'
        },
        {
            username: 'Lily',
            comment: 'What a beautiful day!'
        }
    ];
    res.render('comments', { comments });
});

app.listen(port, () => {
    console.log(`Listening on port