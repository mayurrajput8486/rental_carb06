import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'
const Userdetails = () => {

    const [user,setUser] = useState([])
    const navigate = useNavigate()
    const getData = async() =>{
        const response = await axios.get('http://localhost:8000/users')
        //console.log(response)
        const result = response.data
        //console.log(result)
        setUser(result)
    }
    useEffect(()=>{
        getData()
    },[])

    const handleLogout = () =>{
        navigate('/admin')
    }
  return (
    <div>
        <h1>User Details</h1>
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Full Name</th>
                        <th>DOB</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((u,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{u.fname} {u.lname}</td>
                                    <td>{u.dob}</td>
                                    <td>{u.contact}</td>
                                    <td>{u.email}</td>
                                    <td>{u.password}</td>
                                    <td>{u.gender}</td>
                                    <td>{u.state}</td>
                                    <td>{u.city}</td>
                                    <td>{u.address}</td>
                                    <td>
                                        <NavLink to={`/user/update/${u.id}`}><button className='btn btn-warning me-3'><i className="bi bi-pencil-square"></i></button></NavLink>
                                        <NavLink to={`/user/delete/${u.id}`}><button className='btn btn-danger'><i className="bi bi-trash3-fill"></i></button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <button className='btn btn-danger w-50' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Userdetails