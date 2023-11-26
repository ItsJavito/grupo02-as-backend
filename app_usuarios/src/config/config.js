// leer desde .env
require('dotenv').config();
const config = {
    DB_URL: process.env.DB_URI,
    SECRET: process.env.SECRET || 'la beba',
    PORT: process.env.PORT || 8080
};
module.exports = config;
