
const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;

connection.on("connected", ()=> {
    console.log("Mongoose connected ");
});

connection.on("error", (error)=>{
    console.log("Error in mongoose connection ", error);
});

module.exports = mongoose;