import React from 'react'

const Contact = () => {
    return (
        <div className="jumbotron d-flex text-center justify-content-center">
            <form action="" className="form-signin">
                <h1>Contact us</h1>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control mb-3"/>
                <label htmlFor="email">Message</label>
                <textarea name="" id="" cols="30" rows="10" className="form-control">Your message goes here</textarea>
                <input type="button" value="Send" className="btn btn-primary btn-lg btn-block"/>
            </form>
        </div>
    )
}

export default Contact
