const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    pImage:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

module.exports=mongoose.model("posts",postSchema)