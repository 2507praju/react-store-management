import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Viewproucat() {
   const[producats,setProducats]= useState([]);
    const getData= ()=>{
        axios.get('http://localhost:4000/producat')
        .then( (res)=>setProducats(res.data))
    }
    useEffect(getData,[])
    function deleteProducat(id){
       axios.delete(`http://localhost:4000/producat/${id}`)
       .then(res=>{
        if(res.status===200)
       {
        alert("producat details removed..!")
        window.location.reload();
       }
       })
       .catch(error=>console.log(error))
    }
  return (
    <div>
        <table className='table table-hover table-white'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>ProdcatName</th>
                    <th>specification</th>
                    <th>manufacture</th>
                    <th>quantity</th>
                    <th>prise</th>
                    <th>inStock</th>
                    <th>image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    producats.map((producat)=><tr><td>{producat.id}</td>
                    <td>{producat.ProdcatName}</td>
                    <td>{producat.specification}</td>
                    <td>{producat.manufacture}</td>
                    <td>{producat.quantity}</td>
                    <td>{producat.prise}</td>
                     <td><input type='checkBox' checked={producat.inStock}></input></td>
                    <td><img src={producat.image} height={50}></img> </td>
                    <td><button className='btn btn-outline-danger' onClick={()=>deleteProducat(producat.id)}><i class="bi bi-trash-fill"></i></button></td>
                    <td><Link className='btn btn-outline-primary' to={`/edit/${producat.id}`} ><i class="bi bi-pencil-square"></i></Link></td>
                </tr>)
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default Viewproucat