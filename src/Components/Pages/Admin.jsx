import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    //useNavigate () hook return one functional variable
    const navigate = useNavigate()

    const adminLogin = () =>{
      if(username === 'ADMIN' && password === 'Admin@123'){
        alert('ADMIN LOGIN SUCCESSFUL !!!')
        navigate('/userdetails')
        
      }else{
        alert('Wrong Username and Password')
        setUsername('')
        setPassword('')
      }
    }
  return (
    <div>
      <h2>ADMIN LOGIN</h2>
      <div className='bg-primary w-50 mx-auto p-3 rounded-3 mt-5 mb-5'>
        <div>
          <input 
            type='text'
            className='form-control mb-3'
            placeholder='Enter Admin Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div>
          <input 
            type='password'
             className='form-control mb-3'
             placeholder='Enter Admin Password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <div>
          <button className='btn btn-outline-warning w-50 mb-3' onClick={adminLogin}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Admin