const app = require('./app');
const db = require('./conifg/mongoDb')

require('dotenv').config();

db(); // connect to database
const PORT = process.env.PORT || 3050; // assign a port for server

app.listen(PORT ,()=>{
    console.log("Server running on PORT",PORT);
}) // connect to server

