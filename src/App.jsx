import { useState } from 'react'

import './App.css'
import { HomePage } from './screens/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { MichaelJackson } from './screens/MichaelJackson'

function App() {
  const [show, setshow] = useState()
  const updateshow=(data)=>{
    setshow(data);
  }
  return (
    <>
    <Router>
      <Routes>
        {/* run homepage at '/' endpoint */}
        <Route path='/' element={<HomePage updateshow={updateshow}/>}/>
        {/* taking the search data and pass as prop in the MichaelJackson component */}
        <Route path='/ca' element={<MichaelJackson show={show}/>} />
      </Routes> 
      </Router>
      
          
        
    </>
  )
}

export default App
