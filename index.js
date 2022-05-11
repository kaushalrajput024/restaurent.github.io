const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const db = require('./routes/db-config');

const PORT = process.env.PORT || 8000;

//               ***set up of path***
const viewsPath = path.join(__dirname, "./templates/views");
// const viewsPathadmin = path.join(__dirname, "./templates/views/admin");
const partialsPath = path.join(__dirname, "./templates/partials");
// console.log(path.join(__dirname, "./templates/partials"));
// ******************************************************************

//      ***for adding CSS and JS Folder ***
app.use(express.static(__dirname + "/public/js"))
app.use(express.static(__dirname + "/public/css"))
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public/video"))
// console.log(__dirname + "/public/js");
// *********************************************************

//                 ***Middleware***
app.set("view engine", "hbs");                //set a views engine
app.set("views", viewsPath);                  //change the views engine folder
//app.set("views", viewsPathadmin);             //change the views engine folder
hbs.registerPartials(partialsPath);           //set a hbs partials
//app.use(express.static(staticPath));         //set a static path for serve a static website i.e html page
// ***************************************************************************************

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

//                ***temp***
app.use(require('./routes/router'));                //page routing
// ****************************************************

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});