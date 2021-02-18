import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <div className="jumbotron d-flex text-center justify-content-center">
            <form action="" className="form-signin">
                <h1>Contact us</h1>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control mb-3"/>
                <label htmlFor="email">Message</label>
                <textarea name="" id="" cols="30" rows="10" className="form-control">Your message goes here</textarea>
                <Button name="Send"></Button>
            </form>
        </div>
    )
}

export default Contact
