import React from 'react'
import Button from '../partials/Button'
import data from './data'

const Articles = () => {

    return (
        <>
        <div className="jumbotron d-flex text-center justify-content-center">
            <div className="col-sm-6 text-justify">
                {data.map((item) => {
                    return(
                      <div className="mb-4">
                          <h1 key={item.id} className="text-center">
                              {item.title}
                          </h1>
                          <p className="text-justify">
                              {item.text.slice(0,300) + '...'}
                          </p>
                          <Button 
                            name="More..." 
                            event={e=>{alert('More...')}}
                            />
                      </div>
                    )
                })}
            </div>
        </div>
    </>
    ) 
}

export default Articles
