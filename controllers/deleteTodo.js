const Todo=require('../models/todo');

const deleteTodo=async(req,res)=>{
    const params=req.params;
try{
const response=await Todo.findByIdAndDelete({_id: params.id});
if(response){
    res
    .status(200)
    .json({
        status: 'Success',
        response,
        message: 'Item SuccessFully Deleted'
    })
}
else{
    res
    .status(404)
    .json({
        status: 'Failure',
        message: 'No Matching Items Found'
    })
}
}
catch(error){
res
.status(500)
.json({
    status: 'Failure',
    response: error.message,
    message: "Internal Server Error"
})
}
}
module.exports=deleteTodo;