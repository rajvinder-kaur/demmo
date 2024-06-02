import React from 'react'
import list from '../data/list.js';
import {Link} from 'react-router-dom';

function Listing() {
    console.log(list)
  return (
    list.map((x)=>{
        return(
            <li key={x.id}>
            <Link to={`detail/${x.id}`} ><h1>{x.title}</h1></Link>
           <p>{x.company}</p>
           </li>
        )
    })
  )
}

export default Listing