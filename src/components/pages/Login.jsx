import React, {useState} from 'react'
import Button from '../partials/Button'

const Login = (props) => {

    const adminUser = {
        email: "admin@admin.com",
        password: "1234"
    }

    const [user, setUser] = useState({name:"",email:""})
    const [error, setError] = useState("")
    const [details, setDetails] = useState({name:"", email:"", password:""})
    

    const login = details => {
        console.log(details)

        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            console.log("details do not match !"); 
            setError("details do not match !")   
        }
    }

    const logout = () => {
        setUser({name:"",email:""})
    }

    const submitHandler = e => {
        e.preventDefault()

        login(details)
    }

    return (
        <div className="jumbotron d-flex text-center justify-content-center">
            {(user.email != "") ? (
                <div>
                    <h2 className="text-success">Welcome !<span>{user.name}</span></h2>
                    <Button name="Logout" event={logout}/>
                </div>
                ) : (
                <form onSubmit={submitHandler} className="form-signin">
                    <img src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" alt="user-login" className="w-50"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    {(error !== "") ? (<div className="text-danger">{error}</div>) : ""}
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input 
                        type="email"    
                        id="inputEmail" 
                        className="form-control mb-3" 
                        placeholder="Email address" required="" autofocus="" 
                        onChange={e => {
                            setDetails({ ...details, email: e.target.value})}}
                        value={details.email}
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control mb-3" 
                        placeholder="Password" 
                        required=""
                        onChange={e => {
                            setDetails({ ...details, password: e.target.value})}}
                        value={details.password}
                        />
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <input type="submit" value="login"></input>
                </form>
        )}
        </div>
      
    )
}

export default Login
