import React from 'react'
import image from "../icon.png"
const MainContent = ({ data }) => {
    return (
        <div className='content m-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
            <div className="row img-bg">
                <img  className="img"  src={image} alt="Loading" />
            </div>
            <div className="row">
                <p className='text-success content-heading '>{data.heading}</p>
            </div>
            <div className="row">
            <p className='content-data'>{data.content}</p>
            </div>



        </div>
    )
}

export default MainContent
