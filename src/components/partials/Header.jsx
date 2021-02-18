import React from 'react'

const Header = (props) => {
    return (
        <div>
            <header className="m-0 bg-light text-center">
                <h3>{props.title}</h3>
            </header>
        </div>
    )
}

export default Header
