const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const register = require("./controlers/register");
const signin = require("./controlers/signin");
const profile = require('./controlers/profile');
const image = require('./controlers/image');

const app = express();
const saltRounds = 10;
app.use(bodyParser.json());
app.use(cors());

const db = require('knex')({
    client: 'pg', connection: {
        host: '127.0.0.1', port: 5432, user: '', password: '', database: 'smart-brain'
    }
});

app.get('/', (req, res) => {
    res.send('it is working');
});

app.post('/signin', signin.handleSignIn(db, bcrypt, saltRounds));

app.post('/register', (req, res) => {
    register.handleRegister(req, res, db, bcrypt, saltRounds)
});

app.get('/profile/:id', (req, res) => {
    profile.handleProfileGet(req, res, db)
});

app.put('/image', (req, res) => {
    image.handleImageGet(req, res, db)
});

app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is running on port ${process.env.PORT}`)
});