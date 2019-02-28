var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect("mongodb://myname:mypassword1@ds121896.mlab.com:21896/newthingy", { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");