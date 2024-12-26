// console.log("hello world");
import express from 'express'

const app = express();

app.listen(8080,()=>{
    console.log("server started at port 8080")

})
app.get('/',(req,res)=>{
    res.send("hello world seven")
})

app.get('/home',(req,res)=>{
    res.send("this is home API")

})
app.get('/products',(req,res)=>{
    let products =
    [
        {
        "prod_name" : "Apple Watch",
        "prod_price": "$25",
        },
        {
        "prod_name" : "Samsung Watch",
        "prod_price": "$20",
        }


    ]
    // res.send("the list od products are: ")
    res.json(products)

})