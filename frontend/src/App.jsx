import { Route, Routes } from "react-router-dom"
import Dashboard from "./component/dashboard"
import Projects from "./component/project"
import Da from "./component/Da"
import Contact from "./component/contact"
import AddContact from "./component/AddConatact"
import About from "./component/About"
import Block from "./component/blocks"
import Blocks from "./component/blocks"

function App(){
     return <div>
<Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/Da" element={<Da/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/AddContact" element={<AddContact/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Block" element={<Block/>}/>
    <Route path="/Blocks" element={<Blocks/>}/>

    {/* <Route path="/Homes" element={<Home}/> */}
</Routes>
    </div>
}export default App