const express=require('express');
const app=express();

require('dotenv').config();

app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log('Server Successfully Started at Port:',process.env.PORT);
})

app.get('/',(req,res)=>{
    res.send('TODO APP')
})

const {dbConnect}=require('./config/dbConnect')
dbConnect();

const todoRouter=require('./routes/todoRoute');
app.use('/api/v1',todoRouter)