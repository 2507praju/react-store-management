import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom';

function Addproducat() {

   const {register,handleSubmit,setValue,reset}=useForm();
    const saveDate=producat =>{
      if(!id){
      axios.post('http://localhost:4000/producat',producat)
    .then(res=>{if(res.status===201){alert("producat details saved")
      reset();
    }})
    .catch(error=>console.log(error));
  }else{
   axios.put(`http://localhost:4000/producat/${id}`,producat)
   .then(res=>{
    if(res.status===200){
      alert("producat details updated..!")
    }
   })
   .catch(error=>console.log(error));
  }
  
    }
     const{id}=useParams();
     const getEditData=()=>{
      if(id){
      axios.get(`http://localhost:4000/producat/${id}`)
      .then(res=>{
        for(let prop in res.data){
          setValue(prop,res.data[prop])
        }
      })
     }
    }
     useEffect(getEditData,[]);

  return (
    <div className='d-flex justify-content-center'>
      <div className='bg-white w-50 mt-4 p-3'>
      
       <h1 className='text-center fs-3 text-primary'>Add producat details...!</h1>
       <form onSubmit={handleSubmit(saveDate)}>
        <div>
          <label className='form-lable'>Enter Producat Id</label>
          <input type="text" {...register('id')}  disabled={id}className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-lable'>Enter Producat Name</label>
          <input type="text" {...register('ProdcatName')}className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-lable'>Enter Producat Specification</label>
          <input type="text" {...register('specification')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-lable'>Enter Producat Price</label>
          <input type="number" {...register('prise')} className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-lable'>Enter Producat manufacture</label>
          <input type="text" {...register('manufacture')}className='form-control border border-dark'/>
        </div>
        <div>
          <label className='form-lable'>Enter Producat Qutity</label>
          <input type="number"{...register('quantity')} className='form-control border border-dark'/>
        </div>
        <div className='mt-3'>
          <label className='form-lable me-4'>Is Producat in stock</label>
          <input type="checkbox" {...register('inStock')} className='form-check-input border border-dark'/>
        </div>
        <button className='btn btn-success mt-3'>submit</button>
       </form>
       </div>
    </div>
  )
}

export default Addproducat