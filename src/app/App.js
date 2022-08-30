import React from "react";
import Customer from "../pages/customer/customer";
import {Routes, Route} from "react-router-dom";
import Item from "../pages/item/item";
import Home from "../pages/Home/home";

function App() {
  return (

    <Routes>
     <Route exact path ='/' element={<Home/>}/>
     <Route path ="/items" element={<Item/>}/>
     <Route path='/customer' element={<Customer/>}/>

    </Routes>


   //  <Customer/>

  );
}

export default App;
