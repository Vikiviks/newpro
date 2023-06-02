import axios from "axios";
import { useState } from "react";
import Sidebar from "./jupiter";

function Register()
{
   const [id, setId] = useState("");
   const [cost, setCost] = useState("");
   const [engine, setEngine] = useState("");
   const [fuel, setFuel] = useState("");
   const [modelname, setModelname] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8081/save",
        {
        id: id,
        cost: cost,
        engine : engine,
        fuel : fuel,
        modelname : modelname
        });
          alert("User Registation Successfully");
          setId("");
          setCost("");
          setEngine("");
          setFuel("");
          setModelname("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <Sidebar>
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 
            <input type="text"
             name="id"
             placeholder="id"
                    
             onChange={(event) =>
              {
                  setId(event.target.value);      
              }}
            />
 
            <input type="text"
            name="cost"
            placeholder="cost"
            onChange={(event) =>
                {
                    setCost(event.target.value);      
                }}
            />
 
            <input type="text"
            name="engine"
            placeholder="engine"
            onChange={(event) =>
                {
                    setEngine(event.target.value);      
                }}          
            />
 
            
            <input type="text"
            name="fuel"
            placeholder="fuel"
            onChange={(event) =>
                {
                    setFuel(event.target.value);      
                }}          
            />
        <input type="text"
            name="modelname"
            placeholder="modelname"
            onChange={(event) =>
                {
                    setModelname(event.target.value);      
                }}          
            />
 
 
 
            <button type="submit">Register</button>
 -
    
            </form>    
 
    
        </div>
        </Sidebar>
    )
}
 
export default Register;