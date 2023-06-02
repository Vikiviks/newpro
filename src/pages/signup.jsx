import React from 'react';
import '../components/login.css'
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from 'react-router-dom'; 
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Signup=()=>{
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");


  async function save(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8081/usersave", {
        userid:userid,
        username: username,
        email: email,
        mobileno:mobileno,
        password: password,
        age:age
        });
        alert("User Registation Successfull");

      } catch (err) {
        alert(err);
      }
    }

  
return(
    

<div className='signup-container '>


<div>


    <MDBContainer fluid  className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif " class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='6'>


          <MDBInput wrapperClass='mb-4' label='User ID' id='formControlLg' type='number' size="lg"   value={userid}
          onChange={(event) => {
            setUserid(event.target.value);
          }}
         
          required/>
          <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"  value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
         
          required/>
        

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"   value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
         
          required/>
            <MDBInput wrapperClass='mb-4' label='Mobile number' id='formControlLg' type='text' size="lg" 
            
            value={mobileno}
            onChange={(event) => {
              setMobileno(event.target.value);
            }}
            required />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"   
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required />
           <MDBInput wrapperClass='mb-4' label='Age' id='formControlLg' type='number' size="lg" 
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
            required/>


          

          <MDBBtn className="mb-6 w-100" size="lg"  onClick={save}>Sign up</MDBBtn>

        

        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </div>
    

)
}
export default Signup;