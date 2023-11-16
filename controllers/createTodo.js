const Todo=require('../models/todo');

const createTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.create({title,description});
        res
        .status(200)
        .json({
            status: "success",
            response,
            message: "Todo Successfully Created"
        })
    }
    catch(error){
        res
        .status(500)
        .json({
            status: "failure",
            response: error.message,
            message: 'Internal Server Error'
        })
    }
}

module.exports=createTodo;