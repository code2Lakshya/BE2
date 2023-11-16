const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 56
    },
    description: {
        type: String,
        required: true,
        maxLength: 56
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports=mongoose.model('Todo',todoSchema);