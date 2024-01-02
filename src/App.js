import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/About'
function App() {
  return (
    <>
    <BrowserRouter>
             <Header/>
                <Routes>
                       
                       <Route path='/' element={<><Main/> <About/></>}/>
                      
                </Routes>
            <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App