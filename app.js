const express = require("express")
const ejsMate = require('ejs-mate')
const path = require('path')
const mongoose = require('mongoose')
const answer = require('./controllers/answer')



let app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static("public"));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

/* main().then(res => {
    console.log("Database connected!")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/choiceMaker');
} */

app.get("/da", (req, res) => {
    res.render("da")
})

app.get('/PAZASTOONDA', (req, res) => {
    res.render('ne')
})

app.post("/odgovor", answer.getAnswer)



app.get("/", (req,res) => {
    res.render("home")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Hostamo ovaj Donositlej odluka na portu 3000!!!!")
})