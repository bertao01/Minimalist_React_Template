import React from 'react';
import Button from '../partials/Button'

const Contact = () => {
    
    return (
        <div className="jumbotron d-flex text-center justify-content-center">
            <form action="/" className="form-signin" method="post">
                <h1>Contact us</h1>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control mb-3" required />
                <label htmlFor="email">Message</label>
                <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Your message goes here"  required></textarea>
                <Button 
                    name="Send"
                    event={(e)=>{
                        alert('Message Sent')
                        e.preventDefault()
                    }}
                />
            </form>
        </div>
    )
}

export default Contact
