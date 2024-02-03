const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(index.html)
})

app.get('/sound/:name',(req,res)=>{
    const {name} = req.params;
    
    res.json({'sound' : name})
})


app.listen(port)
