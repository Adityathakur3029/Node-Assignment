import express from 'express';
import mongoose from 'mongoose';
const port = 3000
const app = express()


mongoose.connect('mongodb+srv://adityathakurmca18du:QOsd5XjYIHS5aaRH@cluster0.ppjbz6k.mongodb.net/test', {useNewUrlParser: true})
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
  }).on('error',function(err){
    console.log('Error', err);
  })

app.listen(port,()=>{
    console.log("Listening on port: ${port}")
})

