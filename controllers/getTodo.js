const Todo=require('../models/todo');

const getTodo=async(req,res)=>{
try{
const response=await Todo.find({});
if(response.length>0){
    res
    .status(200)
    .json({
        status: 'Success',
        response,
        message: 'Items Found'
    })
}
else{
    response
    .status(404)
    .json({
        status: "Failure",
        message: 'No Item Found'
    })
}
}
catch(error){
    res
    .status(500)
    .json({
        success: 'Failure',
        response: error.message,
        message: 'Internal Server Error!'
    })
}
}
module.exports=getTodo;