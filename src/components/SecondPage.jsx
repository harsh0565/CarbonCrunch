import React from 'react'
import img1 from "../img1.png"
import "./SecondPage.css"
const SecondPage = () => {
  return (
    
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 img1-bg ">
                <img className='img1' src={img1} alt="Loading" />
            </div>
            <div className="col-md-4 justify-content-center">
                <div className="cardd c1">
                    <div>3X</div>
                    <p>ESG high performers deliver a higher total shareholder return</p>
                </div>
                <div className="cardd c2">
                    <div>98%</div>
                    <p>of CEOs agree sustainability is their responsibility</p>
                </div>
                <div className="cardd c3">
                    <div>18%</div>
                    <p>of companies are cutting emissions fast enough to reach net zero by 2050</p>
                </div>
                <div className="cardd c4 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div>37%</div>
                    <p>of the world's largest companies have a public net zero target. Nearly all are off track</p>
                </div>

            </div>
          </div>
        </div>
      </div>

    
  )
}

export default SecondPage
