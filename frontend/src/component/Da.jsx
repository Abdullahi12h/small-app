import { Link, NavLink } from "react-router-dom"

function Da(){
    return (

        <div className="flex">
          <div className="bg-blue-800 h-[900px] w-72">
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
                <Link to="/Block"> Post</Link>
              </li>

            </ul>
          </div>
        </div>
        


    )
}

export default Da
