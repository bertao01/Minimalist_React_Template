import React from 'react';
import Button from '../partials/Button'

const Register = () => {

    return (
    <div className="jumbotron d-flex text-center justify-content-center">
        <form className="w-25">
            <h1 className="mb-3">Register</h1>
            <div className="form-row">
                <div className="form-group col-12">
                    <label htmlFor="inputEmail4">Name</label>
                    <input type="text" className="form-control" id="inputname4" placeholder="Name"/>
                </div>
                <div className="form-group col-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-12">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
        
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <Button 
                name="Submit" 
                event={(e)=>{
                    alert("Register Form Sent !")
                    e.preventDefault()
                }}
                />
        </form>
    </div>
    )
}

export default Register
