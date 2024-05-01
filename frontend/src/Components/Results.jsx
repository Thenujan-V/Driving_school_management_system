import React from 'react'
import Navbar from './Navbar/Navbar'
import VerticalNavbar from './VerticalNavbar'

const Results = () => {
    
  return (
    <div>
        <Navbar />
        <div style={{display:'flex', height:'100vh'}}>
            <VerticalNavbar />
            <div style={{flex:'1'}} className='results'>
                <h1>Your Result</h1>
                <div className="boxes">
                    <div className="exam col-lg-6">
                        <h2>Written Exam Result</h2>
                        <div id="examPass">
                            <p>Congrats...! You Passed the examination</p>
                        </div>
                        <div id="examFail">
                            <p>Sorry you faild the examination.</p>
                        </div>
                    </div>
                    <div className="trial col-lg-6">
                        <h2>Driving Exam Result</h2>
                        <div id="trialPass">
                            <p>Congrats...! You Passed the trail.</p>
                        </div>
                        <div id="trailFail">
                            <p>Sorry you faild the trail.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Results