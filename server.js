const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.get('/',(req,res) => {
    res.json("API working");
});

require('./app/routes/note.routes.js')(app);

app.listen(5000,() => {
    console.log('Server running at 5000 port');
})