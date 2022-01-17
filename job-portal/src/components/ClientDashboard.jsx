import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

function ClientDashboard(){
    const { jobs } = useSelector((state)=>({jobs:state.jobs}))
    console.log(jobs);
    const [jobData, setJobData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3005/jobs")
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setJobData(data);

        })
    },[jobs])
    return(
        
        <div>
            <h1>Avaiable Jobs</h1>
            {
                jobData.map((el)=>{
                    return (<div key={el.id}>
                        <h3>Company Name: {el.company_name}</h3>
                        <p>Job Title: {el.job_title}</p>
                        <p>Salary: {el.salary}</p>
                        <p>Job Description: {el.job_description}</p>
                        <p>Location: {el.location}</p>
                        <p>Job Type: {el.job_type}</p>

                    </div>)
                })
            }
            <Link to="/"><button>logout</button></Link>
            


        </div>
    )
}

export default ClientDashboard;