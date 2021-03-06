import React from 'react';
import {  Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) =>{
    return(
        <>

        <nav className={"navbar navbar-expand-lg " + props.bgStyle}>
                        <div className="container-fluid">
                            <Link className={"navbar-brand " + props.textStyle} to="/" >{props.title}</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item" >
                                <Link className={"nav-link " + props.textStyle} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className={"nav-link " + props.textStyle} to="/about">{props.aboutText}</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <label className={"form-check-label " + props.textStyle} htmlFor="">Light</label>
                                <div className="form-check form-switch mx-2">                                 
                                    <input className="form-check-input" onChange={props.handleTheOnChange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    
                                    <label className={"form-check-label " + props.textStyle} htmlFor="flexSwitchCheckDefault">Dark</label>
                                </div>
                                <div style={{height:"50px", width:"50px", backgroundColor:`${props.color}`}}></div>
                            </form>
                            </div>
                        </div>
                    </nav>

                    
        </>
    );

}

export default Navbar;

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}