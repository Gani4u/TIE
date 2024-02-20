var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


mongoose.connect('mongodb://Locolhost:27017/tie',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to database"))

app.post("/public/contact",(req,res)=>{
    var name = req.body.name;
    var phn = req.body.phn;
    var email = req.body.email;
    var message = req.body.message;

    var data = {
        "name": name,
        "phn": phn,
        "email":email,
        "message":message
    }

    db.collection('contact').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('bro.html');

})


app.get("/",(req,res)=>{
    res.set({
        "ALLow-ALLow-Origin": '*'
    })
    return res.redirect('contact.html')

}).listen(3000);

console.log("Listening on PORT 3000");