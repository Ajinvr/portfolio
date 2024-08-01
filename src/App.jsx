import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Header from './pages/header/Header'
import Footer from './pages/footer/Footer';
import PageReveal from './pages/pagereveal/PageReveal';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);
  
  return (
     <Router>
        {loading ? (<PageReveal/>) 
        : (
          <>
          <Header/>
            <Routes>
               <Route path="/" element={<Home />} />
            
            </Routes>
         <Footer/>
         </>
        )}
    </Router>
  )
}

export default App