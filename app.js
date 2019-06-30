var app = require('express')();
var MongoClient = require('mongodb').MongoClient;
console.log("Heyyy");


app.get('/home', (req,res)=>{
res.send("Hello World!");
});



// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});

var userSchema = new mongoose.Schema({
  user: {
    id: String,
    name:String,
    Email: String,
    Points: Int16Array,
    DoneProjects: Array,
    CurrentProjects: Array,
    Friends: Array
    },
    
    Project: {
    Id: String,
    Steps: Array,
    Author: user,
    NoDone: Int16Array
},
UserProject:{

Id: String,
Project: Project,
Mentor: user
}});


app.listen(5500,server=>{
console.log("Server is running!");
});