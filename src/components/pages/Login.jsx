import React from 'react'
import Button from '../partials/Button'

const Login = (props) => {
    return (
        <div className="jumbotron d-flex text-center justify-content-center">
            <form className="form-signin">
                <img src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" alt="user-login" className="w-50"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control  mb-3" placeholder="Email address" required="" autofocus=""/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control  mb-3" placeholder="Password" required=""/>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <Button 
                    name="Sign in"
                    event={(e)=>{
                        alert("Login Form Sent !")
                        e.preventDefault()
                    }}
                />
            </form>
        </div>
    )
}

export default Login
