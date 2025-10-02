const mongoose=require("mongoose")
const Contactschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    textArea:{
        type:String,
        required:true
    }
}
)

module.exports=mongoose.model("Contact",Contactschema)