let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8230;
const mongoUrl = process.env.mongoUrlLive
// const mongoUrl = "mongodb+srv:Yuvrajsinh:zCz8XtVfmmTwqid7@zomatocluster.xmadf.mongodb.net/zomapi?retryWrites=true&w=majority";
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const token = "8fbf8tyyt87378";

// // middleware 
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json())
// app.use(cors())


app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

//location
app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// Reaturants
app.get('/reasturant',(req,res)=>{
    db.collection('zomato').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// meals 
app.get('/meals',(req,res)=>{
    db.collection('meals').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


// Connection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`,err);
    db = client.db("zomapi");
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})