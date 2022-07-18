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
axios.get("http://localhost:3004").then((res)=>setData(res))
  },[])


  return (
    <div>
      
    </div>
  )
}

export default Appointments