import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Da from "../component/Da"

function AddContact(){
    const [name,setname]=useState("")
    const [Address,setAddress]=useState("")
    const [textArea,settextArea]=useState("")
     const nave =useNavigate()
const hadlePoast=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/Create/Con",{
       
        "name":name,
        "Address":Address,
        "textArea":textArea,
    }).then(()=>{
        alert("success registration")
        nave("/")
    })
}
      return  <>
      <div className="flex">

       <Da/>
       <div className="flex justify-center items-center h-screen">  <form  className="bg-blue-700  w-[65%] h-[500px] rounded-2xl p-10 ">
    <input value={name}onChange={(e)=> setname(e.target.value)} className="w-80 h-10 rounded-lg pl-3 text-2xl " type="text" placeholder="Enter name" /><br /><br />
    <input value={Address}onChange={(e)=>setAddress(e.target.value)} className="w-80 h-10 rounded-lg pl-3 text-2xl " type="text" placeholder="Enter Address" /><br /><br />
    <textarea value={textArea}onChange={(e)=>settextArea(e.target.value)} rows="5" cols="40" />
    <button onClick={hadlePoast} className="bg-white px-12 py-2 rounded-lg my-6 ml-52 text-3xl text-black">Add contact</button>

</form>
    </div>
      </div>

    </>

}export default AddContact