import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} size="10x" />

const Dashboard = () => {
    return (
        <div className="jumbotron">
            <h1>Dashboard</h1>
            <p>Login to access the Dashboard</p>
            {element}
            </div>
    )
}

export default Dashboard
