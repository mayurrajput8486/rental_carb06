import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Userprofile from './Userprofile'
const Userlogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState([])

    const handleLogin = async() =>{
        const response = await axios.get('http://localhost:8000/users')
        const result = response.data
    
        const stuLogin = result.filter((stu)=> stu.email === email && stu.password === password)

        if(stuLogin.length > 0){
            setLoggedIn(stuLogin)
            alert('User Login Successfull')
            setEmail('')
            setPassword('')
        }else{
            alert('Login Fails')
            setEmail('')
            setPassword('')
        }
    }

    const handleLogout = () =>{
        setLoggedIn([])
        setEmail('')
        setPassword('')
    }

    if(loggedIn.length > 0){
        return <Userprofile user={loggedIn} onLogout={handleLogout}/>
    }


  return (
    <div >
        <div>
            <h1>User Login</h1>
        </div>
        <div className='w-50 mx-auto p-3 rounded-3 bg-info mt-5'>
            <div>
                <input 
                    type='email'
                    className='form-control mb-3'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type='password'
                    className='form-control mb-3'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                <button className='btn btn-success me-3' onClick={handleLogin}>LOGIN</button>
                <NavLink to='/user'><button className='btn btn-warning'>NEW REGISTRATION</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Userlogin