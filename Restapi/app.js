let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
const { query } = require('express')
dotenv.config()
let port = process.env.mongo || 8230;
const mongoUrl = process.env.mongoUrlLive;



app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

// location

app.get('/location',(req,res)=>{
    db.collection('locations').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// reasturant

app.get('/reasturant',(req,res)=>{
    db.collection('reasturant').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// meal-Type

app.get('/mealType',(req,res)=>{
    db.collection('meal_type').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})



// Connection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`,err);
    db = client.db("zomato");
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})