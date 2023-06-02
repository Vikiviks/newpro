import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "./jupiter";
function Update(){
    const {id}=useParams();
    const [values,setValues]=useState({
        id:id,
        cost:"",
        engine:"",
        fuel:"",        
        modelname:""    
    })
    useEffect(()=>{
        axios.get('http://localhost:8081/car/'+id)
        .then(res=>{
            setValues({...values,id: res.data.id,
                cost: res.data.cost,
                engine: res.data.engine,
                fuel: res.data.fuel,
                modelname: res.data.modelname
            })
        })
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:8081/car/'+id,values)
        .then(res=>{
            navigate('/');
        })
        .catch(err => console.log(err))
    } 
    return(
    <Sidebar>
        <form >
           <div>
            
              <h1>Update</h1>

            <p>Fill in the Information Below</p>
            <input type="text" name="modelname" placeholder="modelname" value={values.modelname} onChange={e => setValues({...values,modelname: e.target.value})}/>
 
            <input type="number"  name="id"  placeholder="id" value={values.id} onChange={e => setValues({...values,id: e.target.value})}/>

            <input type="text" name="cost" placeholder="cost" value={values.cost} onChange={e => setValues({...values,cost: e.target.value})}/>
 
            <input type="text" name="engine" placeholder="engine" value={values.engine} onChange={e => setValues({...values,engine: e.target.value})}/>
 
            <input type="text" name="fuel" placeholder="fuel" value={values.fuel} onChange={e => setValues({...values,fuel: e.target.value})}/>



            <button onClick={handleSubmit}>edit</button>
           </div>
           </form>
           </Sidebar>
    )
    
}
export default Update;