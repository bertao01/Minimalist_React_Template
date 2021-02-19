import React, {useState, useEffect} from 'react';
import Button from '../partials/Button'

const Register = (props) => {

    const users = []

    const [newUser, setNewUser] = useState({name:"",email:"", password:""})

    const register = (e) => {
        users.push(newUser)
        alert('Welcome ' + newUser.name + " you were added to the list of users !")
        e.preventDefault()
    }

    return (
    <div className="jumbotron d-flex text-center justify-content-center">
        <form  className="w-25">
            <h1 className="mb-3">Register</h1>
            <div className="form-row">
            <div className="form-group col-12">
                    <label htmlFor="inputEmail4">Name</label>
                    <input 
                        type="name" 
                        className="form-control" 
                        id="registerName" 
                        placeholder="Name"
                        onChange={e => {
                            setNewUser({...newUser, name: e.target.value})
                        }}
                        value={newUser.name}
                        />
                </div>
                <div className="form-group col-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="registerEmail" 
                        placeholder="Email"
                        onChange={e => {
                            setNewUser({...newUser, email: e.target.value})
                        }}
                        value={newUser.email}
                        />
                </div>
                <div className="form-group col-12">
                    <label htmlFor="inputPassword4">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="registerPassword" 
                        placeholder="Password"
                        onChange={e => {
                            setNewUser({...newUser, password: e.target.value})
                        }}
                        value={newUser.password}
                        />
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
            <input
                className="btn btn-primary"
                type="Submit" 
                onClick={register}
                />
        </form>
    </div>
    )
}

export default Register