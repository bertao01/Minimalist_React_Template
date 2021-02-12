import React from 'react'

const Button = (props) => {
    return (
        <>
            <div className="container text-center">
                <button className="brn btn-success">{props.name}</button>
            </div>
        </>
    )
}

export default Button
