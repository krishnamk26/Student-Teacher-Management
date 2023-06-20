import React from "react";
import Navbars from "./component/Navbars";
import Home from "./component/Home";
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Aboutus from "./component/Aboutus"
import Contactus from "./component/Contactus"
import Studentslist from "./component/Studentslist";
import Teacherslist from "./component/Teacherslist";
import { useState } from "react";
import AddStudent from "./component/AddStudent";
import AddTeacher from "./component/AddTeacher";
import Footer from "./component/Footer";

function App() {
  let [users,setUsers]=useState([
    {
      sname:'krishna',
      email:'krissurya1@gmail.com',
      mobile:'9578675765',
      sex:'Male',
      dob:'1998-06-26',
      city:'madurai',
      zipcode:'625014'
    },
    {
      sname:'deepan',
      email:'deepan1@gmail.com',
      mobile:'866815140',
      sex:'Male',
      dob:'1998-04-24',
      city:'madurai',
      zipcode:'625014'
    },
    {
      sname:'karthi',
      email:'karthi@gmail.com',
      mobile:'7894561230',
      sex:'Male',
      dob:'1998-08-24',
      city:'madurai',
      zipcode:'625014'
    },
    {
      sname:'viji',
      email:'viji1@gmail.com',
      mobile:'6352149870',
      sex:'Female',
      dob:'2001-10-26',
      city:'madurai',
      zipcode:'625014'
    },
    {
      sname:'udesh',
      email:'udesh@gmail.com',
      mobile:'9659654595',
      sex:'Male',
      dob:'1999-10-02',
      city:'madurai',
      zipcode:'625014'
    },
    {
      sname:'kumar',
      email:'kumar@gmail.com',
      mobile:'9976740399',
      sex:'Male',
      dob:'2001-10-26',
      city:'madurai',
      zipcode:'625014'
    },
  ])
  let [teachers,setTeachers]=useState([
    {
      tname:'Nagarajan',
      email:'nagaraj1@gmail.com',
      mobile:'6521349870',
      sex:'Male',
      dob:'1990-06-26',
      city:'Chennai',
      zipcode:'600074'
    },
    {
      tname:'Mohan',
      email:'mohan1@gmail.com',
      mobile:'8974562310',
      sex:'Male',
      dob:'1990-10-20',
      city:'Chennai',
      zipcode:'600074'
    },
    {
      tname:'sangeetha',
      email:'sangeetha@gmail.com',
      mobile:'9856321417',
      sex:'Male',
      dob:'1998-10-20',
      city:'Chennai',
      zipcode:'600074'
    },
  ])
  return<>
  <BrowserRouter>
  <div>
   <Navbars/>
  </div>
  <div>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers} teachers={teachers} setTeachers={setTeachers} />}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/student-list" element={<Studentslist users={users} setUsers={setUsers}/>}/>
      <Route path="/add-student" element={<AddStudent users={users} setUsers={setUsers}/>}/>
      <Route path="/edit-student/:id" element={<AddStudent users={users} setUsers={setUsers}/>}/>
      <Route path="/teachers-list" element={<Teacherslist teachers={teachers} setTeachers={setTeachers}/>}/>
      <Route path="/add-teacher" element={<AddTeacher teachers={teachers} setTeachers={setTeachers}/>}/>
      <Route path="/edit-teacher/:id" element={<AddTeacher teachers={teachers} setTeachers={setTeachers}/>}/>
      <Route path="*" element={<Navigate to='/home'/>}/>
    </Routes>
  </div>
  
  </BrowserRouter>
  <Footer/>
  </>
}

export default App;
