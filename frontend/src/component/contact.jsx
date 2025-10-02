import { useEffect, useState } from "react"
import axios from "axios"
import { Link, NavLink } from "react-router-dom"
import Da from "../component/Da"

function Contact(){
    const [data,setData]=useState([])

    const handReadData=()=>{
        axios.get("http://localhost:4000/Read/Contact").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
    handReadData()
    },[])

// const handleDalete=(id)=>{
//     axios.delete(`http://localhost:4000/delete/employe/${id}`).then(()=>{
//         alert("success delete")
//         handReadData()
//     })
// }

return   <>
<div className="flex">

<Da/>

<div className="py-12 ml-2  ">
    <Link to="/AddContact"><button className="bg-blue-800 px-12 py-2 rounded-lg my-6 text-2xl text-white ">Add Contact </button></Link>
      
            {
               data.length > 0? data.map((item)=>{
            return <>
            <div className="bg-green-500   grid grid-cols-1 px-2 rounded-lg ">

                
                
              <h1 className="text-2xl pl-5 pt-8 pb-6 "><span className="text-3xl font-semibold text-black">Name:</span>{item.name}</h1>
              <h1 className="text-2xl pl-5 pt-8 pb-6 "><span className="text-3xl font-semibold text-black">Addresss:</span>{item.Address}</h1>
              <h1 className="text-2xl pl-5 pt-8 pb-6 "><span className="text-3xl font-semibold text-black">textArea:</span>{item.textArea}</h1>

                    {/* <th className="py-3 px-12 text-2xl text-center" >{item.phone}</th> */}
                    <th className="py-3 px-12 text-2xl text-center" >
                        <div>
                        <NavLink to={`/Update/${item._id}`}><i className="fa-solid fa-edit text-red-800"></i></NavLink> 
                          <i onClick={()=>handleDalete(item._id)} className="fa-solid fa-trash text-green-700"></i>
                        </div>
                    </th>

            </div>
                
            </>
            
                })
                :
                <h1>ther's no data</h1>
            }
           
    </div>
</div>

</>
    
}export default Contact