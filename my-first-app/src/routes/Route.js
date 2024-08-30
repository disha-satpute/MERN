import { Routes, Route } from "react-router-dom";

import Home from "../components/main/home";
import About from "../components/main/about";
import Contact from "../components/main/contact";
import Login from "../components/membership/login";
import Register from "../components/membership/register";

import Customer from "../components/CRM/customer";
import Insert from "../components/CRM/customerInsert";
import Update from "../components/CRM/customerUpdate";
import Remove from "../components/CRM/customerRemove";
import Details from "../components/CRM/customerDetails";

import Dashboard from "../components/BI/dashboard";
import Barchart from "../components/BI/barchart";
import Linechart from "../components/BI/linechart";
import Piechart from "../components/BI/piechart";



var AppRoute=()=>(

    <Routes>

        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path ="customer" element={<Customer/>}/>
        <Route path ="insert" element={<Insert/>}/>
        <Route path ="details/:id" element={<Details/>}/>
        <Route path="update/:id" element={<Update/>}/>
        <Route path="Remove/:id" element={<Remove/>}/>

        <Route path ="dashboard" element ={<Dashboard/>}/>
            <Route path ="barchart" element ={<Barchart/>}></Route>
            <Route path ="linechart" element ={<Linechart/>}></Route>
            <Route path ="piechart" element ={<Piechart/>}> </Route>

    </Routes>

);

export default AppRoute;