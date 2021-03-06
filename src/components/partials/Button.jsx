import React from 'react'

const Button = (props) => {
    return (
        <>
            <div className="container text-center mt-3 mb-3">
                <input 
                    className="btn btn-primary btn-lg" 
                    onClick={props.event}
                    type="submit" 
                    value={props.name}/>
            </div>
        </>
    )
}

export default Button
