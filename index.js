const express = require("express");
const ejs = require('ejs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next)=>{
    res.render('main');
});

/* app.post('/', (req, res, next)=>{
    let suma = '$149.99';
    res.render('main', {selectSum: suma})
}); */

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;