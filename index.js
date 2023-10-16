const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('food is coming')
});

app.listen(port,()=>{
    console.log(`food is coming by the posr : ${port}`)
})