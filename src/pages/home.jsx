import axios from 'axios'
import React,{useEffect,useState} from 'react'
function Home(){
 const [data,setData]=useState([])
 const [records,setRecords]= useState([])
 useEffect(()=>{
  axios.get(`http://localhost:8081/car`)
  .then(res=>{
    setData(res.data)
    setRecords(res.data);
  })
  .catch(err=>console.log(err));
 },[])
 const Filter = (event)=>{
  setRecords(data.filter(f=>f.modelname.toLowerCase().includes(event.target.value)))
  
 }
 const Filter1 = (event)=>{
  setRecords(data.filter(f=>f.fuel.toLowerCase().includes(event.target.value)))
  
 }
 const Filter2 = (event)=>{
  setRecords(data.filter(f=>f.cost.toLowerCase().includes(event.target.value)))
  
 }
 const Filter3 = (event)=>{
  setRecords(data.filter(f=>f.engine.toLowerCase().includes(event.target.value)))
  
 }
return(
  <div>
  <h1> Search Your Cars </h1>
  <input type="text" className='form-control' onChange={Filter} placeholder='search your car'/>
  <input type="text" className='form-control' onChange={Filter1} placeholder='fuel'/>
  <input type="text" className='form-control' onChange={Filter2} placeholder='cost'/>
  <input type="text" className='form-control' onChange={Filter3} placeholder='engine'/>
  <table class="table table-striped ">
    <thead  style={{backgroundColor: '#33568b',color:'white',borderRadius:'10px'}}>
      <tr>
        <th>Car Id</th>
        <th>Car Cost</th>
        <th>Car Engine</th>
        <th>Car Fuel</th>
        <th>Car Modelname</th>
      
   
      </tr>
    </thead>

    <tbody>
      {records.map((post,i) => (
        <tr key={i}>
          <td>{post.id}</td>
          <td>{post.cost}</td>
          <td>{post.engine}</td>
          <td>{post.fuel}</td>
          <td>{post.modelname}</td>
          

       

        </tr>
      ))}
    </tbody>
  </table>
</div>
)
}
export default Home;