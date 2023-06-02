import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useStates } from 'react';

const Viewflightdetails = () => {
  const [data,setData]=useState([])
 const [records,setRecords]= useState([])




 

  // const [lang, setLang] = useState("en");
  useEffect(()=>{
    axios.get(`http://localhost:8081/car`)
    .then(res=>{
      setData(res.data)
      setRecords(res.data);
    })
    .catch(err=>console.log(err));
   },[])
  

  

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
         
          <div className="App">
       
          </div>
        </div>
      </nav>

      <div
        style={{
          backgroundColor: "#042759",
          color: "white",
          padding: "10px 20px",
        }}>





            
       


      
      </div>

      <h4 style={{ backgroundColor: "#f1f2f8", padding: "10px 20px" }}>
        <b>Cars Available For Booking</b>
      </h4>
      <div style={{width:"50rem"}}>
      {records.map((post) => (
        <div class="container-fluid" style={{ padding:"10px 20px",marginTop:'20px' }}>
          <div class="row">
          
              <div
                class="card"
                style={{
                  border: "none",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  height:"18rem",
                  padding:"30px",
                }}>
                <div class="card-horizontal" style={{display:'flex',justifyContent:'space-between'}}>
                  <div class="img-square-wrapper">
                    <img
                      class="card-img-top"
                      style={{ padding: "10px 20px", borderRadius: "25px" }}
                      src={post.image}
                      height="200"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">
                      <td>
                        <b >{post.modelname}</b>
                      </td>
                    </h4>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Fuel:</b>
                        {post.fuel}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Cost:</b>
                        {post.cost}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Engine:</b>
                        {post.engine}
                      </td>
                    </h6>
                  
                   
                    <button
                      class="btn btn-secondary  margin-left"
                      ><i  class="fa-solid fa-pen-to-square"></i>edit here
                    </button>
                    <p class="card-text"></p>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        
      ))}
      </div>


    
    </div>
  );
              
};

export default Viewflightdetails;

