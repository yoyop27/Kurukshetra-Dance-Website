const express = require("express");
const path = require("path");
const fs = require("fs");
const exp = require("constants");
const bodyparser = require("body-parser");
const app = express();
const port = 2704;






// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/KURUKSHETRADB');
// }


// const ContactSchema = mongoose.Schema({
//     name: String,
//     phonenumber: Number,
//     email:String,
//     query:String
//   });


// const Modell = mongoose.model('kurukshetradbcontact', ContactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})

app.get('/contactus', (req, res)=>{
    const params = {}
    res.status(200).render('contactus.pug', params);
})

app.get('/success', (req, res)=>{
    const params = {}
    res.status(200).render('success.pug', params);
})

app.get('/failure', (req, res)=>{
    const params = {}
    res.status(200).render('failed.pug', params);
})

app.get('/base', (req, res)=>{
    const params = {}
    res.status(200).render('base.pug', params);
})

// app.post('/contactus' , (req,res)=>{
//     var myData = new Modell(req.body);
//     myData.save().then(()=>{
//         console.log("SUBMITTED")
//         res.redirect("/success")
//     }).catch(()=>{
//         console.log("NOT SUBMITTED")
//         res.redirect("/failure")
//     })
//     const  params = {}
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


















