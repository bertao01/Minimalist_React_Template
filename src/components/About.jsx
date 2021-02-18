import React from 'react'
import Lorem from './Lorem'

const About = () => {
    return (
        <div className="jumbotron d-flex text-center justify-content-center">
        <div className="w-50">
            <h1>About</h1> 
            <h2 className="m-3">This is a minimalist template made with Bootstrap / React / Node js</h2>
            <Lorem/>
        </div>
        </div>
    )
}

export default About
