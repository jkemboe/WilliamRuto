import React from 'react';

import './join.css';

function JoinForm(){
    return (
        <div>
 <div className="join-container">
            <div className="join-mid">
                 <h2>Sign Up to Volunteer</h2>
                 <div>
                     <input type="text" placeholder="Email"/>
                     <input type="text" placeholder="County"/>
                     <input type="number" placeholder="Mobile Number"/>
                     <input className="submit-btn" type="submit" placeholder="Submit"/>
                 </div>
            </div>
        </div>
            <div className="donate-style">
                <div> <h2>Support Ruto</h2></div>
                <div>
                <span>Kshs: 100</span>
            <span>Kshs: 250</span>
            <span>Kshs: 500</span>
             <span>Kshs: 1,000</span>
             <span>Kshs: 5,000</span>
             <span>Kshs: 10,000</span>
             <span>Other</span>
                </div>
           
          
            </div>
        </div>
       
    )
}

export default JoinForm;