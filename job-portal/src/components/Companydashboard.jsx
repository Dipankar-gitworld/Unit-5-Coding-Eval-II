import { useState } from "react";
import "./ClientDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { AddJob, IsLoading, IsError } from "../store/actions";
import {Link} from "react-router-dom";


function CompanyDashboard(){
    const [formData, setFormData] = useState({});
    const { loading } = useSelector((state)=>({ loading:state.loading}))
    const dispatch = useDispatch();
    
    const handleChange = (e)=>{
        const {name,value} = e.target;

        formData[name] = value;
        setFormData({...formData})
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(IsLoading());
        fetch("http://localhost:3005/jobs",{
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res=> res.json())
        .then(data=>{
            dispatch(AddJob(data));
        })
        .catch(err=>{
            dispatch(IsError(err));
        })
        console.log(formData);
        e.target.reset();
    }
    return(
        loading?<div>loading...</div>:
        <div>
            <h1>ADD JOBS</h1>
            <form onSubmit={handleSubmit} className="form">
               <input type="text" name="company_name" placeholder="company_name" onChange={handleChange} />
               <input type="text" name="job_title" placeholder="job_title" onChange={handleChange} />
               <input type="number" name="salary" placeholder="salary" onChange={handleChange} />
               <input type="text" name="job_description" placeholder="job_description" onChange={handleChange} />
               <input type="text" name="location" placeholder="location" onChange={handleChange} />
               <input type="text" name="job_type" placeholder="job_type" onChange={handleChange} />
               <input type="submit" value="POST" />
            </form>

            <Link to="/"><button>logout</button></Link>


        </div>
    )
}

export default CompanyDashboard;

// company name, job title, salary range, job description, location, job type (remote)