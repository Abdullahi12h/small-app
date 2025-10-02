const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const postRouter=require("./router/postRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/smallApp").then(()=>console.log("success connection"))

app.use(postRouter)

// route images aan kasoo aqrisanoyo

app.use("/Allimages", express.static("document"))

app.listen(4000,()=>console.log("is running..."))