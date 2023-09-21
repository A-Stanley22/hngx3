import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import LogIn from "./components/LogIn";
import { UserAuth } from "./context/AuthContext";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate()
  const { currentUser, loading } = UserAuth()
  
  useEffect(() => {
 if (currentUser) {
   navigate("/")
  } else {
    navigate("/login")
  }
  }, [currentUser, navigate])

 
  return (
    <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
        <Footer />
    </main>
    
  )
}