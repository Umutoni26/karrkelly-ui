
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import LoginSignup from "./pages/LoginSignup"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import CreateAccount from "./components/CreateAccountForm/CreateAccount"
import Service from "./components/Service"
import Infopage from './components/Infopage'
import Hero from "./components/Hero"

function App() {

  return (
    <>
      
       <Router>
        <Navbar/>
        <Routes>
        <Route path="/service" element={<Service />} />
         <Route path="/infopage" element={<Infopage />} />
          <Route path='/' element={<Landingpage/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/CreateAccount' element={<CreateAccount/>}/> 
          <Route path='/Hero' element={<Hero/>}/> 
        </Routes>
       </Router>
    </>
  )
}

export default App

// import Navbar from './components/Navbar'
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './pages/Home';
// import LoginSignup from './pages/LoginSignup';
// import Product from './pages/Product';
// import Cart from './pages/Cart';
// import Service from './pages/Service';
// import Contactus from './pages/Contactus';
// import Aboutus from './pages/Aboutus';

// import './index.css';
// import Landingpage from './pages/Landingpage';


// function App() {
  

//   return (
   
//    <Router>
      
//       <Navbar/>
//       <Routes>
//       <Route path='/' element={<Landingpage/>}/>
//       <Route path='/login' element={<LoginSignup/>}/>
//       <Route path='/product' element={<Product/>}/>
//       <Route path='/cart' element={<Cart/>}/>
//       <Route path='/Service' element={<Service/>}/>
//       <Route path='/Contact' element={<Contactus/>}/>
//       <Route path='/About' element={<Aboutus/>}/>

      
//       </Routes>

//    </Router>
   
  
   
    
//   )
// }

// export default App

