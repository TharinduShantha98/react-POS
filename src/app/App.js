import React from "react";
import Customer from "../pages/customer/customer";
import {Routes, Route} from "react-router-dom";
import Item from "../pages/item/item";

function App() {
  return (

    <Routes>
     <Route exact path ='/' element={<Customer/>}/>
     <Route path ="/items" element={<Item/>}/>

    </Routes>


   //  <Customer/>

  );
}

export default App;
