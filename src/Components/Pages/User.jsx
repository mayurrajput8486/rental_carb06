import React from 'react'
import './Users.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const User = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const addData = (data) =>{
    axios.post('http://localhost:8000/users',data)
    alert('Form Submitted!!!')
    reset()
  }

  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo" className="img-fluid abc"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <form onSubmit={handleSubmit(addData)}>
                        <h3 className="mb-5 text-uppercase">User Sign Up</h3>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m" className="form-control form-control-lg" 
                              {...register('fname',{
                                required : 'First Name is required',
                                pattern : {
                                  value : /^[A-Za-z\s]+$/,
                                  message : 'Only Letters are allowed'
                                }
                              })}/>
                              <label className="form-label" htmlFor="form3Example1m">First name</label>
                              {
                                errors.fname && <p className='text-danger fw-bold'>{errors.fname.message}</p>
                              }
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n" className="form-control form-control-lg" 
                                {...register('lname',{
                                  required : 'Last Name is required',
                                  pattern : {
                                    value : /^[A-Za-z]+$/,
                                    message : 'Only Letters are allowed'
                                  }
                                })}/>
                              <label className="form-label" htmlFor="form3Example1n">Last name</label>
                              {
                                errors.lname && <p className='text-danger fw-bold'>{errors.lname.message}</p> 
                              }
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="tel" id="form3Example1m1" className="form-control form-control-lg" {...register('contact')}/>
                              <label className="form-label" htmlFor="form3Example1m1">Contact</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="password" id="form3Example1n1" className="form-control form-control-lg" {...register('password')}/>
                              <label className="form-label" htmlFor="form3Example1n1">Password</label>
                            </div>
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address')}/>
                          <label className="form-label" htmlFor="form3Example8">Address</label>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                              value="Female" {...register('gender')}/>
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                              value="Male" {...register('gender')}/>
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                              value="Other" {...register('gender')}/>
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select data-mdb-select-init className='form-control' {...register('state')}>
                              <option value="">State</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Goa">Goa</option>
                              <option value="Rajasthan">Rajasthan</option>
                            </select>

                          </div>
                          <div className="col-md-6 mb-4">

                            <select data-mdb-select-init className='form-control' {...register('city')}>
                              <option value="">City</option>
                              <option value="Pune">Pune</option>
                              <option value="Goa">Goa</option>
                              <option value="Jaipur">Jaipur</option>
                            </select>

                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="date" id="form3Example9" className="form-control form-control-lg" {...register('dob')}/>
                          <label className="form-label" htmlFor="form3Example9">DOB</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="form3Example97" className="form-control form-control-lg" {...register('email')}/>
                          <label className="form-label" htmlFor="form3Example97">Email ID</label>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                          <button type="sumbit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default User