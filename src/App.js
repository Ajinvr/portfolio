import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/About'
import Project from './components/Projects'
import Services from './components/Services'
import Notfound from './components/Notfound'
function App() {
  return (
    <>
    <BrowserRouter>
             
                <Routes>
                       <Route path='/' element={<> <Header/> <Main/> <About/> <Project/> <Services/>  <Footer/> </>}/>
                       <Route path='/Notfound' element={<Notfound/>}/>
                </Routes>
            
    </BrowserRouter>

    </>
  )
}

export default App