var express = require("express"),
    mongoose= require("mongoose"),
    bodyParser = require("body-parser"),
    app     = express();

var todoRoutes = require("./routes/todos");

mongoose.connect("mongodb://myname:mypassword1@ds121896.mlab.com:21896/newthingy", { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);
    
app.listen(process.env.PORT, function(){
    console.log("This server is running on port " + process.env.PORT);
});