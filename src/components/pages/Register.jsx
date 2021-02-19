import React from 'react';
import Button from '../partials/Button'

const Register = () => {

    return (
    <div className="jumbotron d-flex text-center justify-content-center">
        <form>
            <h1 className="mb-3">Register</h1>
    <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
    </div>
    <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="inputCity">City</label>
        <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="form-group col-md-4">
        <label htmlFor="inputState">State</label>
        <input type="text" id="inputState" className="form-control"/>
        </div>
        <div className="form-group col-md-2">
        <label htmlFor="inputZip">Zip</label>
        <input type="text" className="form-control" id="inputZip"/>
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
