import React, { useState } from 'react';
import {
    FaCarSide,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaCartPlus,FaTrashAlt
    
}from "react-icons/fa";
import '../components/jupiter.css'
import { NavLink } from 'react-router-dom';
import DeleteCars from './delete';
import {AiFillSetting} from "react-icons/ai"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
         {
             path:"/dash",
             name:"Dashboard",
             icon:<AiFillSetting/>
        },
      
        {
            path:"/update/:id",
            name:"Update",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Y",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"X",
            icon:<FaShoppingBag/>
        },
        {
            path:"/delete",
            name:"Delete Cars",
            icon:<FaTrashAlt/>
        },
        {
            path:"/add",
            name:"Add Cars",
            icon:<FaCartPlus/>
        }
    ]
    return (
        <div>
            <nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>
        
        <div className="container7">
            
           
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
           
        
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>
            {children}
           </main>
        </div>
        </div>
    );
};

export default Sidebar;