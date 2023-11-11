const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8088 ;
const mongoose = require('mongoose');
const userDetail = require("../my-portfolio/model/user");


// connect to mongo database
mongoose.connect('mongodb+srv://shradesh71:newone71@cluster0.4tegtua.mongodb.net/portfolio?retryWrites=true')
    .then(()=>{
        console.warn("connect...");
    })
    .catch((error)=>{
        console.log(error);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views')); // set the veiw directory
    

app.use('/static',express.static('static'));
app.use('/veiws',express.static('veiws'));// for serving static files

app.use(express.urlencoded({extended: false}));

app.get('/',(req, res) =>{
    res.render("portfolio");  
});

app.post('/',async (req, res) =>{
    const { email, name, message, emailsub, mobile } = req.body;
    try{
        await userDetail.create({
            name,
            email,
            message,
            emailsub,
            mobile
        });
        res.redirect("/");
    }
    catch(e){
        console.log(e);
        res.write("Error found!! try again<br><br>");
        res.write("<button><a href="/"> Click Here</a><button>");
        res.send();
    };
});

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});