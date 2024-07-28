const path = require('path');
const express = require('express');
const app = express();

//relative absolute
const staticPath = path.join(__dirname, "../public");

//built in middleware
app.use(express.static(staticPath));

app.get('/',(req,res) =>{
    res.send('Hello World express js');
});

app.get('/about',(req,res) =>{
    res.send('Hello World about pages express js');
});

app.listen(8000, ()=>{
    console.log("listing the port at 8000");
});

