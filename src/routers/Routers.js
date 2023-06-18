import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage'
import Trucklist from '../pages/Trucklist';
import TruckDetals from '../pages/TruckDetals';
import Contact from '../pages/Contact';
import Login from '../Component/Authentication/Login';
import SignUp from '../Component/Authentication/SignUp'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'}/>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/aboutpage' element={<AboutPage></AboutPage>}></Route>
      <Route path='/trucklist' element={<Trucklist></Trucklist>}></Route>
      <Route path='/truckdetals' element={<TruckDetals></TruckDetals>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
  );
}

export default Routers;
