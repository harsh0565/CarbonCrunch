import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { data } from './data'
import SecondPage from './components/SecondPage'

const App = () => {
  return (
    <div >
      <Header/>
      <div className=" container-fluid mx-3 ">
        <div className=" mainContent">

        <div className="row">
        {data.map((e,index)=>{
          return(
            <div key={index} className="col-md-4 col-sm-6">
          <MainContent data= {e}/>
        </div>
        )
      })}
        </div>
      </div>

      </div>

      <SecondPage/>

    </div>
  )
}

export default App
