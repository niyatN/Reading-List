const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');//for requiesing from differnt servers


//allow cross-origin request
app.use(cors());

// DB connnecction
mongoose.connect('mongodb://localhost:27017/BookData');
mongoose.connection.once('open',()=>{
    console.log("Connected to db");
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, (err)=>{
    if (err) throw err;
    console.log("Lisinting for request 4000");
});