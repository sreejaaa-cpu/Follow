import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from 'react';

function CreateProduct(){

    const [formdata,setFormData] =useState({
        email:"",
        name:"",
        description:"",
        category:"",
        tag:"",
        price:"",
        stock:"",
        images:[],
        previewImg:[]

    })

    const handleChange=()=>{

    }

    let categoryArr=["electronic1,electronic2,electronic3,electronic4"]
    return(
        <>
        <div className='w-[50%] border-1 bg-amber-50'>
            <p>CreateProduct</p>

            <label className='block' htmlFor="">Email</label>
            <input className='border-1' type="email" placeholder='Enter your email' name="email"
            id="" />

            <label className='block' htmlFor="">Name</label>
            <input className='border-1' type="text" placeholder='Enter your name' name="name" />

            <label className='block' htmlFor="">Description</label>
            <textarea name="description" id=""></textarea>


            <label className='bloack' htmlFor="">category</label>
            <select className='border-1' name="" id=""></select>
            <option value="">choose a category</option>
            {categoryArr.map(ele=>(
                <option value={ele}>{ele}</option>
                
            ))}

            
            <label className='block' htmlFor="">tags</label>
            <input className='border-1' type="text" placeholder='enter product tag' name="tags" />
            
            <label className='block' htmlFor="">Price</label>
            <input className='border-1' type="number" name="price"/>

            <label className='block' htmlFor="">stock</label>
            <input className='border-1' type="number" name="stock" />

            <label className='block' htmlFor="">upload photo</label>
            <input className='border-1 hidden' type="file"  id='upload'/>

            <label htmlFor="">
            <IoIosAddCircleOutline />


            </label>

            <input type="text" />
             
        </div>
        </>


    )

    
}

export default CreateProduct