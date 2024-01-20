const mongoose = require("mongoose")
// then we define the schema which is outline of the table
// i'm trying to create:
const Schema = mongoose.Schema
// Schema here is a class that we are trying use an object from
// in oop we must use key new keyword for classes and objects
const articleSchema = new Schema({
    title: String,
    body: String, 
    numberOfLikes: Number
})

// then we define the model which is name of table and outline
// we defined above of table as parameters:
const Article = mongoose.model("Article", articleSchema)
// this model will be used in with the endpoints in the index.js files
// inorder to do that we will need to export then import model:
module.exports = Article
// then we go to index.js to import file
// - after signing in the to the mongodb atlas page and and selecting
// database under deployment section, we will be able to collection
// option then when we click on it we will find the name of our
// model with an s added to it to make plural "article" in this   
// at this point articles is an empty table when we click on it
// so next step is define the end points(requests) in index.js that will
// create new articles
