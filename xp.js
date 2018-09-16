var express = require('express');

var app = express();
app.set('view engine' , 'ejs' );

app.get('/profile/:name',function (req,res) {
var data = {Age:19 , Gender:'Male',hobbies:['playing game','Listening music','Leaning new things']};
    res.render('home',{person:req.params.name, data:data});
});
app.get('/home',function (req,res) {

    res.render('homepage');
});


app.listen(3000);