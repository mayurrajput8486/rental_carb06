import React from 'react'
import { NavLink } from 'react-router-dom'

const Userprofile = ({user, onLogout}) => {
  return (
    <div>
        <h2>User Profile</h2>
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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <button className='btn btn-danger' onClick={onLogout}>User Logout</button>
        <button>Edit Profile</button>
    </div>
  )
}

export default Userprofile