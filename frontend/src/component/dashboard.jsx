import { Link, NavLink } from "react-router-dom"

function Dashboard(){
    return (
      <> <div className="flex">

        <div className="flex">
          <div className="bg-blue-800 h-[730px] w-72">
            <ul className="text-white font-semibold text-2xl py-1 px-6 pt-24 space-y-10">

              {/* Dashboard */}
              <div className="flex gap-2">
                <li>
                  <i class="fa-solid fa-gauge"></i>
                  <Link to="/"> Dashboard</Link>
                </li>
              </div>

              {/* About */}
              <li>
                <i class="fa-solid fa-address-card"></i> 
                <Link to="/About"> About</Link>
              </li>

              {/* Projects */}
              <li>
                <i class="fa-solid fa-diagram-project"></i>
                <NavLink to="/Projects"> My projects </NavLink>
              </li> 

              {/* Contact */}
              <li>
                <i class="fa-solid fa-address-book"></i>
                <Link to="/Contact"> Contact</Link>
              </li>

              {/* Post */}
              <li>
                <i class="fa-solid fa-signs-post"></i>
                <Link to="/Home"> Post</Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="flex  ml-16 gap-2">

    <div className="bg-red-300 w-60 h-72 ml-14 mt-6 "> <h1 className="text-8xl text-green-700 text-center mt-8"><i class="fa-solid fa-list-check"></i></h1> <br /><h1 className="text-4xl font-semibold text-center  "> 18</h1> <br /> <h1 className="text-3xl font-semibold text-center ">Projects</h1> </div>
    <div className="bg-green-400 w-60 h-72 ml-14 mt-6 "><h1 className="text-8xl text-green-700 text-center mt-8"><i class="fa-solid fa-user"></i></h1> <br /><h1 className="text-4xl font-semibold text-center  "> 34</h1> <br /> <h1 className="text-3xl font-semibold text-center ">Contacts</h1></div>
    <div className="bg-blue-500 w-60 h-72 ml-14 mt-6 "><h1 className="text-8xl text-black text-center mt-8"><i class="fa-solid fa-signs-post"></i></h1> <br /><h1 className="text-4xl font-semibold text-center  "> 345</h1> <br /> <h1 className="text-3xl font-semibold text-center ">Post</h1></div>
    </div>
      </div>


      </>
    )
}

export default Dashboard
