import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Edit from "./Edit"

function App() {


  return (
    <div>
    <Routes>
    <Route path="/" element={ <Home/>}></Route>
    <Route path="/edit/:id" element={ <Edit/>}></Route>
    </Routes>
  
    </div>
  )
}

export default App
