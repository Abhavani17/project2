const express=require('express')
const app=express()
app.get('/honey',function(req,res){
res.send("honey product data")
})
app.get('/clothes',function(req,res){
    res.send("clothes products data")
})
app.get('/shampoo',function(req,res){
    res.send("shampoo products data")
})
app.listen(8082)