const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'client','build'))) 

app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})

app.listen(port,()=> {
    console.log('App alive')
})