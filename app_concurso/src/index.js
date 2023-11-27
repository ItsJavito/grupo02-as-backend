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
