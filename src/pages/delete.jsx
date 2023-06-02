import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Sidebar from "./jupiter";



export default class DeleteCars extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8081/car`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  deleteRow(id, e){
    axios.delete(`http://localhost:8081/crud/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })

  }

  render() {
    return (
      <Sidebar>
      <div >
        <div >
        <h1 > Delete Car Details </h1>

        <table class="table table-striped ">
          <thead  style={{backgroundColor: '#33568b',color:'white',borderRadius:'10px'}}>
            <tr>
              <th>Car Id</th>
              <th>Car Cost</th>
              <th>Car Engine</th>
              <th>Car Fuel</th>
              <th>Car Modelname</th>
              <th>Delete</th>
              <th>Edit</th>
         
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post,i) => (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.cost}</td>
                <td>{post.engine}</td>
                <td>{post.fuel}</td>
                <td>{post.modelname}</td>
                

                 <td><i onClick={(e) => this.deleteRow(post.id, e)} class="fa-solid fa-trash"></i></td>
                 <td><i><Link classname='text-decoration-none '  to={`/update/${post.id}`} class="fa-solid fa-pen-to-square"></Link></i></td>
                 


              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </Sidebar>
    );
  }
}