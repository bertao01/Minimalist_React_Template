import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Lorem from '../data/Lorem'

const element = <FontAwesomeIcon icon={faCoffee} size="10x" />


let stdContainer = "jumbotron d-flex text-center justify-content-center"

const Dashboard = () => {
    return (
        <div className={stdContainer}>
            <div className="col-sm-6">
                <h1>Dashboard</h1>
                <p>Login to access the Dashboard</p>
                <i>{element}</i>
                <Lorem/>
            </div>
        </div>
    )
}

export default Dashboard
