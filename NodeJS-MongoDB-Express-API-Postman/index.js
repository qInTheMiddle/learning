const express = require("express"); //this is so we can use express
const mongoose = require("mongoose");// this is so we can use mongoose

const app = express();

// the following imports Article model from Article.js in model
// folder:
const Article = require("./models/Article")

// take a quick look at what a promise is on youtube, value unknown
// now that may become known in the future or async value like
// requesting a ride from a driver and he will promise to drive us somewhere
// and he may take us somewhere then promise is fullfilled
// or he might reject our ride then we will need to "catch" one
// somewhere else either way the original request is settled
// in this case we may or may not be able to connect depending
// the parameter of connect()
// the following connect() from mongoose library returns a promise
// that justifies the use of the sytax that uses
// then() and catch() with arrow functions as parameters:
mongoose.connect("mongodb+srv://qTheDataBaseCreator:q123@myfirstnodejscluster.koemesp.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("connected successfully");
}).catch((error) => {
    console.log("error with connecting with the DB");
})
// it only connected successfully when i restarted listening using
// nodemon
// mongodb+srv://<username>:<password>@myfirstnodejscluster.koemesp.mongodb.net/?retryWrites=true&w=majority

// the following allows the use of body parameters 
app.use(express.json())

// arrow functions vs functions:
// app.get("/hello", function(){})
// either use function() or () =>

app.get("/hello", (req, res) => {
    res.send("hello");
})

app.get("/", (req, res) => {
    res.send("hello in node js project");
})


// here the type of request is get but it is not the only type there
// is also:
// put & batch requests: usually used to update something, ex: modifying
// post on facebook
// post request: usually used to create something new, ex: posting
// on facebook
// get request; is what we use by default, when we visit facebook 
// we are sending get request
// delete request: for deleting
app.get("/numbers", (req, res) => {
    let numbers = ""
    for(let i = 0; i<= 100; i++){
        numbers += i + " - ";
    }
    // res.send(`the numbers are: ${numbers}`);

    // when building a website:
    // client side rendered vs 
    // server side rendered: meaning html files are created through the 
    // server in a similiar way to front end with the exception of where 
    // the HTML files are being created:
    // res.send("<h1>hello world</h1>")
    // but it is better to do this in seperate ejs files because
    // writing html insdie a string is troublesome and hard and we
    // would have to put the HTML and js logic in one file 
    // so it is better to to put them in seperate files
    // we are going to create a new folder and name it views then 
    // create an HTML file and name numbers and then include it 
    // in the response:
    // res.send(__dirname + "/views/numbers.html")
    // res.sendFile(__dirname + "/views/numbers.html")

    // template engines are engines that allow us to
    // include js files inside html files 
    // the template engine that we will be using0 here
    // is called ejs and it is yet to be explained why
    // first we will have to install it and for that we will
    // node package manager again but we are not going to simply type
    // npm install in the smae terminal because we are using nodemon
    // and a command is being executed
    // so we open new terminal by clicked on + and then install ejs 
    // by typing npm install ejs and like before it will be added to 
    // node module and to package.json 
    // we can see this upate in the dependencies of the package.json file
    // to use ejs template we have to change numbers .html extension to
    // .ejs extension and then the following sytax will be used to 
    // include the ejs file:
    res.render("numbers.ejs", {
        name: "yyyy",
        numbers: numbers
    });
    // remember that it is automatically assumed that the .ejs file is
    //  located in a folder named views in the same directory in order 
    // for this syntax to work
    // the prurpose of all of this headache is so we can send the 
    // variables to the .ejs file by defining a second parameter for 
    // the render function, this second parameter type is json with
    // keys and values for those keys that can be used in the .ejs 
    // files inside the following annoying syntax: <%=keyname%> 
    // importnat calrification: even though the browser doesn't 
    // understand ejs fle the server is creating an html file that 
    // is equievelant to it then sending it to the browser 
    // when we visit the link in the browser we inspect and see that 
    // everything related to ejs disapears and this is hwta is meant 
    // by the server generating an html file 
    // by using the <% %> we include any js code directly in an ejs file
    // although this method is annoying but we will use it for now
    
});
// path parameter is aparameter that is part of the address link
// put : before the part of the link we to be able to change
app.get("/findSummation/:number1/:number2", (req, res) => {
    // console.log(req.params)
    const num1 = req.params.number1;
    const num2 = req.params.number2;

    const total = Number(num1) + Number(num2)

    // res.send(`the numbers are: ${num1} / ${num2} `);
    res.send(` the total is ${total} `);
})

// we can also use body parameters that we can enter value in web browser

app.get("/sayHello/", (req, res) => {
    // console.log(req.body)

    // we can also use query parameters 
    // put ? before the query parameters we wish to add in the address 
    // link bar of post man
    // console.log(req.query)
    // res.send(`Hello ${req.body.name} your age is ${req.query.age}`);
    // the response doesn't have to be text it can also be JSON:

    res.json({
        name: req.body.name,
        age: req.query.age, 
        language: "Amharic"
    })
})




// app.get("/test", (req, res) => {
//     res.send("hello world");
// })

app.put("/test", (req, res) => {
    res.send("hello world");
})


app.post("/addComment", (req, res) => {
    res.send("post request on add comment");
})

app.delete("/testingDelete", (req, res) => {
    res.send("visiting delete request")
})

// lines below so the web server would start working and listenning to users 
// requests has two parameters, first is port which is ike selecting
// which entrance or door to use to enter a house 
// the second parameter is the call back function that is called as
// soon as the server starts listenning

// ======== ARTICLES ENDPOINTS ========
app.post("/articles", async (req,res) => {
// We are now able to use a wide variety of functions that i was
// not able to use before because we imported mongoose although
// it was not the default suggested library to use by mongodb
// website. so we start by defining the new article in the object
// oriernted way:
    const newArticle = new Article();

    // assign body parameters to vars:
    const artTitle = req.body.articleTitle
    const artBody = req.body.articleBody

    // res.send(artTitle + " " + artBody);
    // return;
    // newArticle.title = "my first articles";
    // newArticle.body = "this is the body";
    newArticle.title = artTitle;
    newArticle.body = artBody;
    newArticle.numberOfLikes = 100;
    // we can only use await here if we use async or alternativly
    // we can also use promise
    await newArticle.save();

    // res.send("the new article has been stored");
    res.json(newArticle);

    // At this point we are done with the three stages of the 
    // request starting from client to server then server 
    // communicated with database then database stored the info
    // then a response with returned.
    
    



    // body parameter is the one commonly used to enter this 
    // kind of information because it is to hard and annoying
    // to use path parameters and query parameters
})


// to get all the articles that where saved before but without
// async and await this didn't work:
app.get("/articles", async (req, res) => {
    const articles = await Article.find();
    console.log("the articles are", articles);
    res.json(articles);
});


// this one gets a specific article with a specific id, alhtough
// the instructor kept forgetting to do async and await??? and 
// remembered only after getting an error:
app.get("/articles/:articleId", async (req, res) => {
    // this is how we get path parameter in expressjs
    const id = req.params.articleId;

    // In the future we must use try and catch when ever we use 
    // await and sync because
    // the instructor didn't know what was wrong so had to do
    // try catch to know error but for some reason im not getting
    // any error messages:
    try {
        const article = await Article.findById(id);
        res.json(article);
        return;
    } catch (error) {
        console.log("error while reading article of id", id);
        return res.send("error");
    }
    
    
});


// the following deletes an article:
app.delete("/articles/:articleId", async (req, res) => {
    
    const id = req.params.articleId;


    try {
        const article = await Article.findByIdAndDelete(id);
        res.json(article);
        return;
    } catch (error) {
        console.log("error while reading article of id", id);
        return res.json(error);
    }
    
    
});


// the following gets articles from database
// and displays them in html form, this is what is meant by 
// servers generating html then sending to client:
app.get("/showArticles", async (req, res) => {
    const articles = await Article.find()

    // render.co website to help render better
    res.render("articles.ejs", {
        allArticles: articles,
    });
});


app.listen(3000, () => {
    console.log("I am listenning in port 3000")
})
// to run code type node nameofthefile
// this is a simulation of a server this file has bbee turned into a server
// the address of computer from inside the compter is localhost
// the default port if not specified is 80
// when updating code we have to exit listenning by ctrl+c then run
// it again which is impractical
// a solution to this is use a library called nodemon
// to use library without installing type: npx nodemon index.js
// npx libraryname filename 
// there are four things the client must have in order to communicate
// with server:
// 1- request type
// 2- path or part of address or link
// 3- address or ip address
// 4- port, ex: 3000 in this case 
// we can get server response of get request via chrome but for other
// types of requests using chrome would require using the dev tools
// and it wouldn't be simple so the simplest way is to use postmany
// observation not sure about: on the client side js files are included
// in html and in the server side it is vice versa.
// in this way we can write html fgrom inside the server

// the next step is to use mongodb for the database in server
// to do that we go to mongodb website in order to create 
// database on the server and allow us to communicate with it
// -after we lookup atlas we create an atlas account instead of
// a mongodb account like it was syggested by the instructor
// then after it is created click on quickstart under the security 
// section of the left side of the screen then enter username
// and pasword
// -when finished then we click on database under deployment section
// of the left side of the screen  
// -we are not going to connect the database using the website and
// we are going to use the user as we created in mongodb to represent
// the application code 
// -dealing with the database can be done through api of mongodb
// or alternatevly through ORM or in the case of mongodb ODM 
// because the data is saved in the form of documents 
// ODM stands for Object Document Mapper instead of ORM in the
// case of sql
// -every table in ODM is an object in JavaScript and we every
// change we make on the object will take place on the table in
// the database
// the library that is used in nodejs that we are going to use 
// ORM through is called mongoose although it is not the only
// available choice according to the instructor but mongos is 
// the most populay used one with mongodb
// -to use it we will have to download it first by typing npm 
// install mongoose then we can confirm installation by viewing
// package.json file like before
// -then to connect we go back to back to atlas mongodb website
// then click on connect 
// - click on connect to your application then we will be presented
// with options but we are only interested in the link we are
// presented with at the bottom we copy it and paste it at the beggining
// of index.js for reference
// it is common practice to create a folder that contains all 
// ORM objects weather it is user, post, tweet, article so we 
// create a folder named models and file named Article.js
// This might be a good time to mention the architecture or method
// of dividing the files of the project to three main parts 
// MVC: models views controlers 
// - the end points we are using express with are the controllers
// MVC is the architectre we will be hearing about alot with 
// websites that are being developed this architecture is used
// for developing apps as well


