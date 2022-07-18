import React, { useState } from 'react'
import axios from 'axios'

const AppointmentsAdd = () => {
  
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [details,setDetails]=useState("")
  const [time,setTime]=useState("")
  const [date,setDate]=useState("")
  const [gender,setGender]=useState("")
  

const handdleSubmit=()=>{
  axios.post("http://localhost:3004/appointment",{
    name:name,
    age:age,
    appointment_details:details,
    time:time,
    date:date,
    gender:gender
  })
}



  return (
    <div>
    <input type="text" name="" id="" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="number" name="" id="" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
    <input type="text" name="" id="" placeholder='details' value={details} onChange={(e)=>setDetails(e.target.value)}/>
    <input type="time" name="" id="" placeholder='time'value={time} onChange={(e)=>setTime(e.target.value)}/>
    <input type="date" name="" id="" placeholder='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
    <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
      <option value="male">male</option>
      <option value="female">female</option>
    </select>

    <button onClick={handdleSubmit}>sumit</button>
    </div>
  )
}

export default AppointmentsAdd