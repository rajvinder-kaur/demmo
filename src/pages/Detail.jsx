import React from 'react'
import list from '../data/list.js'
import {useParams,Link} from 'react-router-dom';

function Detail() {
    const {id} = useParams();
    var job = list.find((x)=>x.id === Number(id));
    console.log(job);
    if(!job){
        return(
            <h1>Job not found</h1>
        )
    } else{
        return (
            <>
               <h1>{job.title}</h1>
               <p> {job.company} </p>
               <p> {job.description} </p>
               <p>
                {job.location} 
               </p>
               <button><Link to="/apply" >Apply now</Link></button>
            </>
          )
    }
 
}

export default Detail