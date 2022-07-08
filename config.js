const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    port: process.env.PORT,
    database: process.env.DATABASE_URL,
    clarifaiApiKey: 'c4fe8b7d34bc4be6afb5d20ba9bde35f'
};