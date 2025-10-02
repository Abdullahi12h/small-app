const blockpost = require("../models/blockpost")
const postModel=require("../models/postmodel")
const postmodeltwo = require("../models/postmodeltwo")

// block
const createblock= async(req,res)=>{
    const newData=blockpost({
        title:req.body.title,
        description:req.body.description,
        pImage:req.file.filename
    })
    const saveData=await newData.save()
    if(saveData){
        res.send(saveData)
    }
}
const readblock= async(req,res)=>{
    const readblock=await blockpost.find()
    if(readblock){
        res.send(readblock)
    }
}




// contact  
const CreateContact= async(req,res)=>{
    const newData=postmodeltwo(req.body)
    const saveData=await newData.save()
    if(saveData){
        res.send(saveData)
    }
}
const ReadContact=async(req ,res )=>{
    const ReadContact=await postmodeltwo.find()
    if(ReadContact){
        res.send(ReadContact)
    }
}


const createPost= async(req,res)=>{
    const newData=postModel({
        title:req.body.title,
        description:req.body.description,
        pImage:req.file.filename
    })
    const saveData=await newData.save()
    if(saveData){
        res.send(saveData)
    }
}
const readPost= async(req,res)=>{
    const readPost=await postModel.find()
    if(readPost){
        res.send(readPost)
    }
}

const readSingle= async(req,res)=>{
    const readSingle=await postModel.findById({_id:req.params.id})
    if(readSingle){
        res.send(readSingle)
    }
}
// update Data
 const updateData=async(req,res)=>{
    const updatePost=await postModel.updateOne(
        {_id:req.params.id},
        {$set:{
         title:req.body.title,
        description:req.body.description,
        pImage: req.file ? req.file.filename :undefined
        }}
    )
    if(updatePost){
        res.send("success update")
    }
 }
 const deletePost=async(req,res)=>{
    const deletePost=await postModel.deleteOne({_id:req.params.id})
    if(deletePost){
        res.send("success delete")
    }
 }

module.exports={createPost,readPost,readSingle,updateData,deletePost,ReadContact,CreateContact,createblock,readblock}