const mongoose=require("mongoose")
const BlockSchema=mongoose.Schema({
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

module.exports=mongoose.model("Block",BlockSchema)