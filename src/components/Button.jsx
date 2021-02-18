import React from 'react'

const Button = (props) => {
    return (
        <>
            <div className="container text-center">
                <button className="btn btn-primary btn-lg" type="submit">{props.name}</button>
            </div>
        </>
    )
}

export default Button
