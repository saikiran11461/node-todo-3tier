const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:Boolean,default:false},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true}
},{
    timestamps:true,
    versionKey:false
})

const todoModel = mongoose.model("todo", todoSchema);

module.exports={todoModel}