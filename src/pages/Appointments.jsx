import React, { useEffect, useState } from 'react'
import axios from 'axios'
// "id":1,
// "name":"xtz",
// "age":24,
// "appointment_details":"asdasd",
// "time":"12:12:12",
// "date":"12/12/2021",
// "gender":"male"
const Appointments = () => {
 const [data,setData]=useState([])
  useEffect(()=>{
//axios.get("http://localhost:3004").then((res)=>setData(res))
fetch("http://localhost:3004").then((response)=>setData(response))
  },[])


  return (
    <div>
      {
        data.map((res)=>{
          return(<>
          <div>
            <p>{res.name}</p> 
            <p>{res.age}</p> 
            <p>{res.appointment_details}</p> 
            <p>{res.gender}</p> 
            <p>{res.time}</p> 
            <p>{res.date}</p> 
          </div>
           
          </>)
        })
      }
    </div>
  )
}

export default Appointments