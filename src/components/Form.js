import React, { useState } from 'react'

function Form() {
    const [errors,setErrors] = useState({})
    const [inputData, setInputData] = useState({
        title:'',
        priority: '0',
        description:''
    });


    const handleChange = (e)=> {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }


    const handleError = () => {
        let errors = {};
        if (!inputData.name){
            errors.title = 'Enter a title'
        }
        if (!inputData.description){
            errors.description = 'Enter a Description'
        }
        if (!inputData.name){
            setErrors({
                title: 'Enter a title'
            })
        }
        setErrors(errors)
    }


    const handleSubmit =  (e) => {
        console.log(inputData)
    }

  return (
<form className="lecture-add" id="lecture-add">
    <div className="row mb-2">
        <div className="col-md-6">
            <div className="form-group">
                <input className="form-control" name="title" onChange={(e)=>{handleChange(e)}} value={inputData.title} type="text"  placeholder="Enter your task " />
                
            </div> 
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <select name="priority" onChange={(e)=>{handleChange(e)}} className="form-control" placeholder="Select your priority ">
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group">
                <textarea className="form-control" name="description" onChange={(e)=>{handleChange(e)}} value={inputData.description}  placeholder="Enter your description " rows="4"></textarea>
            </div>
        </div>
    </div>
    <span id="editBtn" >
<button className="success" onClick={(event)=>{
    event.preventDefault()
    handleError()
    handleSubmit()
    }
    } type="submit" id="add">Add</button>
    </span>
</form>
  )
}

export default Form