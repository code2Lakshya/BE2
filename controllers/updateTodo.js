const Todo = require('../models/todo');

const updateTodo = async (req, res) => {
    const params = req.params;
    try {
        const { title, desc } = req.body;
        const response = await Todo.findByIdAndUpdate({ _id: params.id }, { title, desc ,updatedAt: Date.now()});
        if (response) {
            res
                .status(200)
                .json({
                    status: "Success",
                    response,
                    message: 'Item Dound'
                })
        }
        else {
            res
                .status(404)
                .json({
                    status: 'Failure',
                    message: 'Item Not Found'
                })
        }
    }
    catch (error) {
        res
            .status(500)
            .json({
                status: 'Failure',
                response: error.message,
                message: "Internal Server Error"
            })
    }
}
module.exports = updateTodo;