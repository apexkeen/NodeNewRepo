const path = require('path')
const express = require('express');
const app = express();

const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.get('', (req, res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(('server is running on port' + port))
})

