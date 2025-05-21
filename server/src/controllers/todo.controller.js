const {todoModel} = require("../models/todoModel");


const todoController = {
    getTodo:async(req,res)=>{
        try {
            let todo = await todoModel.find();
            return res.status(200).send({message:"get todo success", todo})
        } catch (error) {
            return res.status(500).send({message:error})
        }
    },
    getSingleTodo:async(req,res)=>{
        let {id} = req.params.id;
        if(!id){
            return res.send({message:"id not exist "})
        }
        try {
            let todo = await todoModel.findById(id);
            return res.status(200).send({message:"single todo",todo})
        } catch (error) {
            return res.status(500).send({message:error})
        }
    },
    createTodo:async(req,res)=>{
        const payload = req.body;
        console.log("body",req.body)
        if(!payload){
            return res.send({message:"body not set"})
        }
        try {
            payload.user_id = req.user._id
            let todo = await todoModel.create(payload);
            return res.status(201).send({message:"todo created success", todo})
        } catch (error) {
            return res.status(500).send({message:error})
        }
    },
    patchTodo:async(req,res)=>{
        const payload = req.body;
        let id = req.params.id
        if(!id){
            return res.status({message:"id not exist "})
        }
        if(!payload){
            return res.send({message:"body not set"})
        }
        try {
            let todo = await todoModel.findByIdAndUpdate(id, payload);
            return res.status(201).send({message:"Patched success", todo})
        } catch (error) {
            return res.status(500).send({message:error})
        }
    },

    deleteTodo:async(req,res)=>{
      
        let id = req.params.id
        if(!id){
            return res.status({message:"id not exist "})
        }
        try {
            let todo = await todoModel.findOneAndDelete(id);
            return res.status(201).send({message:" delete success", todo})
        } catch (error) {
            return res.status(500).send({message:error})
        }
    }
}


module.exports = {todoController}