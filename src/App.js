
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Pages/Home.jsx';
import About from './Components/Pages/About.jsx';
import Cars from './Components/Pages/Cars.jsx';
import User from './Components/Pages/User.jsx';
import Admin from './Components/Pages/Admin.jsx';
import Services from './Components/Pages/Services.jsx';
import Footer from './Components/Pages/Footer.jsx';
import Userdetails from './Components/Pages/Userdetails.jsx';
import Updateuser from './Components/Pages/Updateuser.jsx';
import Deleteuser from './Components/Pages/Deleteuser.jsx';
import Userlogin from './Components/Pages/Userlogin.jsx';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/cars' element={<Cars/>}></Route>
                <Route path='/user' element={<User/>}></Route>
                <Route path='/admin' element={<Admin/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/userdetails' element={<Userdetails/>}></Route>
                <Route path='/user/update/:userID' element={<Updateuser/>}></Route>
                <Route path='/user/delete/:userID' element={<Deleteuser/>}></Route>
                <Route path='/userlogin' element={<Userlogin/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
