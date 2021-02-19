import React from 'react'

const Connection = () => {
    return (
        <div className="jumbotron">
            <h1>Connection with node js</h1>
            <button 
                className="btn btn-success" 
                onClick={(e)=>{
                    e.preventDefault()
                    alert('Node js')
                }}>
                    Connect
                </button>
        </div>
    )
}

export default Connection
