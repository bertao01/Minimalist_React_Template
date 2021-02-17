import React from 'react'
import Button from './Button'
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
                <p>
                    {item.text}
                </p>
                <div className="p-3 m-3">
                    <Button name="More..."/>
                </div>
            </main>
        )})}

        </>
    ) 
}

export default Articles
