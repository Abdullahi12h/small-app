import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Da from "../component/Da";
import { Link, NavLink } from "react-router-dom";

function Projects() {

  const [postData,setPostData]=useState([])
  const [title,setTitle]=useState("")
  const [desc,setDescription]=useState("")
  const [image,setImage]=useState("")
  
  function handleRead(){
    axios.get("http://localhost:4000/read/post").then((res)=>{
      setPostData(res.data)
    })
  }
   
 const formData=new FormData()
   formData.append("title",title)
   formData.append("description",desc)
   formData.append("img",image)

  // function handlePost(e){
  //   e.preventDefault()
  //   axios.post("http://localhost:4000/create/post",formData).then(()=>{
  //     alert("success")
  //     handleRead()
  //   })
  // }
  useEffect(()=>{
    handleRead()
  },[])
  return<>
  <div className="flex">
    <Da/>
  <div className="grid grid-cols-4 px-2 gap-2  ml-28 mt-5">
  {
      postData.map((items)=>{
        return <div className=" w-72 h-96 shadow-sm bg-white  p-4 ">
        <img className="w-64 h-60 rounded-xl hover:scale-105 transition cursor-pointer" src={`http://localhost:4000/Allimages/${items.pImage}`} alt="" />
       <NavLink>
        <h1 className="text-4xl font-semibold py-1">{items.title}</h1>

       </NavLink>
        <h1>{items.price}</h1>
        <p className="text-gray-600 pb-2">
          <Link>
        <a className="bg-blue-700 text-white text-3xl font-semibold   rounded-lg" href={items.description}>vite my wesite</a>
          
          </Link>
        </p>
      </div>
      })
    }
      
   
  </div>
  </div>

  </>

} export default Projects
