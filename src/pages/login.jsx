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


const Login=()=>{
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8081/login", {
            username: username,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "Username not exits")
             {
               alert("Username not exits");
             }
             else if(res.data.message === "Login Success")
             {
                
                navigate('/home');
             }
              else
             {
                alert("Incorrect Username and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
  
return(
    

<div className='login-container '>


<div>


    <MDBContainer fluid  className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='6'>


          <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-6 w-100" size="lg" onClick={login} >Sign in</MDBBtn>

        

        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </div>
    

)
}
export default Login;