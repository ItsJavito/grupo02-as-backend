const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

mongoose.connect(config.DB_URL).then(() => {
    console.log('Database connected');
    app.listen(config.PORT, () => {
        console.log(`Server is running on port ${config.PORT}`);
    });
}).catch((err) => { 
    console.log('Failed to connect to database', err) 
});

// mongoose.connect(config.DB_URL).then(() => {
//     console.log('Database connected');
// })
// // crear un usuario por defecto
// const User = require('./models/user');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync("1234", salt);
// const user = new User({
//     username: "admin2",
//     password: hash,
//     email: "201131223@gmail.com"
// });
// user.save().then(() => {
//     console.log('User created');
// }).catch((err) => {
//     console.log('Failed to create user', err);
// });