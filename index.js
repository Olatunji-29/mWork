const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const myURI = process.env.myURI

mongoose.connect(myURI)
.then(() => {
    console.log('connected');
    
}).catch((err) => {
    console.log("Error", err);
    
})



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const allUsers = [];
const loginUsers = [];
app.listen(port, () => {
    console.log({message: "Listening on port 2901"});
    
})


app.get('/', (req, res) =>{
    const customers = ['kemi', 'dauda', 'fatai']
    res.render('home.ejs', {customers, id: 4})
})

app.get('/up', (req, res) => {
    res.render('signup.ejs')
})

app.post('/signup', (req, res) => {
    const user = req.body;
    allUsers.push(user);
    console.log("AllUsers:", allUsers);
    res.redirect('/in')
})

app.get('/in', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res)=>{
    const lUser = req.body
    loginUsers.push(lUser)
    console.log("Login Users:", loginUsers);
    res.redirect('/')
    

})