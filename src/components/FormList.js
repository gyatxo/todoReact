import React from 'react'
const axios = require('axios');
export default function FormList() {
    axios.get('https://infodev-server.herokuapp.com/api/todos')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return (
<div id="lecture-list" >
    <ul id="lecture-ul">
    <li>
        <div>
            <h6 className="title">Complete assignment 5 (Create an TODO app) <span className="ml-2 badge badge-info">Low</span></h6>
            <p className="description">Description of your task goes here</p>
        </div>
        <div>
            <button className="btn btn-success"><i className="fas fa-check"></i></button>
            <button className="btn btn-warning"><i className="fas fa-pencil"></i></button>
            <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
        </div>
    </li>                 
    </ul>
                
</div>
  )
}
