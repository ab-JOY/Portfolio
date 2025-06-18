import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    datePublished:{
        type:String,
        required:true
    }
})

export default mongoose.model("Blog", blogSchema)