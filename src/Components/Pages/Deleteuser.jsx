import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Deleteuser = () => {

  const {userID} = useParams()
  const navigate = useNavigate()
  const [user,setuser] = useState([])
  const getData = async() =>{
    const response = await axios.get(`http://localhost:8000/users/${userID}`)
    const result = response.data
    setuser(result)
  }

  useEffect(()=>{
    getData()
  },[])


  const deleteData = () =>{
    axios.delete(`http://localhost:8000/users/${userID}`)
    alert('Data Deleted !!!')
    navigate('/userdetails')
  }
  return (
    <div>
        <h2>Delete User</h2>
        <div className='bg-dark mx-auto w-50 rounded-3 p-3 mt-5'>
          <div className='mb-2'>
            <h2 className='text-info'>User Name - {user.fname} {user.lname} </h2>
          </div>
          <div  className='mb-2'>
            <h2 className='text-info'>User Email - {user.email}</h2>
          </div>
          <div  className='mb-2'>
            <h2 className='text-info'>User Contact - {user.contact}</h2>
          </div>
          <div>
            <button className='btn btn-danger me-3' onClick={deleteData}>YES</button>
            <NavLink to='/userdetails'><button className='btn btn-warning'>NO</button></NavLink>
          </div>
        </div>
    </div>
  )
}

export default Deleteuser;