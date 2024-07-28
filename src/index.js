const path = require('path');
const express = require('express');
const app = express();
const port = 2580;

//relative absolute
const staticPath = path.join(__dirname,"../public");

//build in middleware
app.use(express.static(staticPath));

app.get('/', (req,res) =>{
    res.send('this is express server');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})