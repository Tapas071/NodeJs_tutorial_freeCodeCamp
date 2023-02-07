const express = require( 'express');

 const app = express();
        const {products} =require('./data.cjs')

        app.get('/', (req, res)=>{

            res.send('<h1> Home page </h1> <a href="/api/products"></a>')
        })

        app.get('/api/products', (req, res)=>{
        const newProducts = products.map((product)=>{
        const {id,name, image}=product;
        return{id, name , image}

        })
        res.json(newProducts);

})




 app.listen(5000, ()=>{
    console.log('server is listening on the port number 5000')
 })