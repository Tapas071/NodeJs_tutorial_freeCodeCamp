
const express = require('express')
const path = require('path');
const app = express()

// app.get('/',(req, res)=>{
//     res.sendFile(path.resolve)


// })

// app.use( express.static('./public'))

app.get('*',(req, res)=>{
    res.status(404).send('resource not found');
})


app.listen(5000, ()=>{
console.log('the server it listening on port')

})
