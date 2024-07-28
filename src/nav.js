const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send('Hello World home pages');
});

app.get('/about',(req,res) =>{
    res.status(200).send("hello about pages");
});

app.get('/contact',(req,res) =>{
    res.send('Hello World contact pages');
});

app.get('/temp',(req,res) =>{
    res.json([
        {
            id:1,
            name:'dhruvin'
        },
        {
            id:2,
            name:'kothari'
        }
    ]);
});

app.listen(2550,()=>{
    console.log('server is running on port 2550');
});