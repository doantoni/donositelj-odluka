const express = require("express")
const ejsMate = require('ejs-mate')
const path = require('path')
const mongoose = require('mongoose')
const answer = require('./controllers/answer')
const users = require('./controllers/users')


let app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static("public"));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = "mongodb+srv://doantoni:h2Hcrxn7@cluster0.4veie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

main().then(res => {
    console.log("Database connected!")
}).catch(err => console.log(err));



async function main() {
  await mongoose.connect(MONGO_URI);
}

app.get("/da", (req, res) => {
    res.render("da")
})

app.get('/PAZASTOONDA', (req, res) => {
    res.render('ne')
})

app.post("/odgovor", answer.getAnswer)

app.get("/users", users.getUsers)

app.post("/users", users.postUser)
app.get("/user/delete/:id", users.deleteUser)
app.post("/user/info/:id", users.editUser)



app.get("/", (req,res) => {
    res.render("home")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Hostamo ovaj Donositlej odluka na portu 3000!!!!")
})