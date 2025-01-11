import React from 'react'
import logo from '../../Static/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid ">
                    <div>
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} alt="Logo" width="75" height="75" className="d-inline-block align-text-top"/>
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/home">
                                    <i className="bi bi-house-gear-fill me-2"></i>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold" to="/about">
                                    <i className="bi bi-info-square-fill me-2"></i>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold" to="/cars">
                                    <i className="bi bi-car-front-fill me-2"></i>
                                    Cars
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold" to="/user">
                                    <i className="bi bi-person-fill me-2"></i>
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold" to="/admin">
                                    <i className="bi bi-incognito me-2"></i>
                                    Admin
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold" to="/userlogin">
                                    <i className="bi bi-person me-2"></i>
                                    User Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold" to="/services">
                                    <i className="bi bi-sliders me-2"></i>
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar