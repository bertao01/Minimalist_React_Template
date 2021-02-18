import React from 'react'
import Button from '../partials/Button'
import data from './data'

const Articles = () => {

    return (
        <>

        {data.map((item) => {
            return(
            <main class="jumbotron m-3">
                <h1 key={item.id} className="text-center">
                    {item.title}
                </h1>
                <p className="text-justify">
                    {item.text}
                </p>
                <div className="p-3 m-3">
                    <Button 
                        name="More..." 
                        event={(e)=>{
                            alert("More...")
                            e.preventDefault()
                        }}
                        />
                </div>
            </main>
        )})}

        </>
    ) 
}

export default Articles
