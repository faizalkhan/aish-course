import logo from "./logo.svg";
import "./App.css";
import "./hook/usestate";
import { Usestatehook } from "./hook/usestate";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import Card from "./card/card";

import cardResponse from "./json/card.json";

import { phoneValidations } from "./utils/validation";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Aboutus from "./pages/aboutus";
import { Contactus } from "./pages/contact";
import { Pagenotfound  } from "./pages/pagenotfound";
import { Home } from "./pages/home";
import { ParentComponent } from "./passing-props/parent";
import { Productlist } from "./product/product";
import { ProductDescription } from "./product-description/productdescription";
import { UseRefHook } from "./hook/useref";
import { UseMemo } from "./hook/usememo";
import { Usecallback } from "./hook/useCallback/usecallback";


import {UserContext, UserContexted} from "./hook/useContext";



function App() {
  const [number, setNumber] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const userName = useContext(UserContext);

  
  function handleFunc() {
    let phoneValidation = phoneValidations(number);
    console.log("Phone validation", phoneValidation);

    if (!phoneValidation) {
      toast.error(`Invalid phone number`);
    }
  }

  async function callingGetApi() {
    let response = await fetch("https://dummyjson.com/products/1");
    let user = await response.json();

    console.log("User", user);
    setUserInfo(user);
  }

  console.log("render ");

  useEffect(() => {
    callingGetApi();
    console.log("useeffect ");
  }, []);

  useEffect(() => {
    console.log("useeffect number ");
  }, [number]);




  return (
<>

      <header className="App-header">


        <UserContexted />

        <Usestatehook />


<div>

  <h2> use hook </h2>
<UseRefHook />


<h2> UseMemo</h2>

 <UseMemo />

 <h2>Usecallback</h2>

 <Usecallback />


 <h2>UseContext </h2>


</div>
       


        {/* <Card name = "mobile" picture = "https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180" />
     <Card name="car"
picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/>
<Card name="bike"
picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/>
<Card name="laptop"
picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/> */}

        {/* {cardResponse.map((item, index) => {
          return <Card key={index} name={item.name} picture={item.img} />;
        })} */}

        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button type="button" onClick={() => handleFunc()}>
          Submit
        </button>
        <ToastContainer />

        <p> {userInfo.brand} </p>

        <p> {userInfo.category} </p>

        <p> <Link to="/"> Home</Link> </p> 
        <p> <Link to="/aboutus"> About us </Link> </p> 
      

        <p> <Link to="/product-description/:id"> Product description </Link> </p> 


          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/aboutus" element={<Aboutus />}></Route>

            <Route path="/contactus" element={<Contactus />}></Route>

            <Route path="/product-description/:id"  element={ <ProductDescription /> }></Route>

            <Route path="/*" element={ <Pagenotfound />}></Route>

    

       

          </Routes>

          <ParentComponent />

  
          
          <Productlist />
        
      </header>
    </>
  );
}

export default App;
