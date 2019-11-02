import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './main.css';
import './animation.css';
import './vision.css';
import './events.css';
import './donate.css';
import './issues.css';
import './movement.css';
import './media.css';
import './touch.css';
import './poll.css';

import IndexImg from './img/WILLyy.jpg';
import Students from './img/students.jpg';
import Willy from './img/willyyy.jpg';

import NavBar from '../navigation/nav';
import Join from '../join/join';
import MainStory from '../story/story';



function Main(){
 return (
     <div className="main-body">
   <div className="header">
         <div className="header-nav">
         <img src={IndexImg}/>
             {/* <div className="header-container">
                  <h1>William Ruto 2022</h1>
             </div> */}
             {/* <div className="donate-links">
             <span onClick={showDonations}>DONATE</span>
            </div> */}
            <NavBar/>
           
         </div>
         <div className="position-animation">
            <Animation/>
         </div>
  
     </div>
     <div className="donation">
        <Donation/>
     </div>
     <StayInTouch/>
     <VisionPage/>
     <EventsContainer/>
     {/* <DonateContainer/> */}
     <Issues/>
     <JoinMovement/>
     <SocialMedia/>
     </div>
  
 )
}

function Animation(){
    return (
        <div class="word">
            {/* <span className="span-quote"></span> */}
            <div class="wrapper span-quote"><h1>"We are all here by God's design and not by chance." <b>William S. Ruto</b></h1></div>
        </div>
    )
}

function Donation(){
    return (
    <div>
        <div className="donation-container">
            <div className="span-box"><span>Kshs: 100</span></div>
            <div className="span-box"><span>Kshs: 250</span></div>
            <div className="span-box"><span>Kshs: 500</span></div>
            <div className="span-box"><span>Kshs: 1,000</span></div>
            <div className="span-box"><span>Kshs: 10,000</span></div>
            <div className="span-box"><span>Other</span></div>
        </div> 
    </div>
    )
}
function showDonations(){   
    const donateContainer = document.querySelector('.donation-container');
    if(donateContainer.className === 'donation-container'){
        // donateContainer.style.display = 'block';
    }
}
function VisionPage(){
    return (
        <div className="vision-page">
            <h1>Vision</h1>
            <p>
                My dream is to turn Kenya into a just modern and prosperous nation. United in pursuit of happiness and where every person has an equal and fair opportunity to be their best.
             </p>
            <Link to="#">This is what William Samoei Ruto Believes</Link>
        </div>
    )
}

function StayInTouch(){
    return (
        <div className="touch-page">
            <div>
                 <h3>STAY IN TOUCH</h3>
                 <span>Get the latest from the team straight to your inbox.</span>
            </div>
            <div className="contact-inpt">
                 <input type="email" placeholder="Email"/>
                 <input type="text" placeholder="County"/>
            </div>
            <div className="contact-btn">
                <button>SIGN UP</button>
            </div>
        </div>
    )
}

function EventsContainer(){
    return (
        <div className="events-body">
            <div className="p-events-body">
            <Poll/>
            </div>
            <div className="e-events-body">
            <Events/>
            </div>
        </div>
    )
}
 
function Events(){
    return (
        <div>
             <div className="events-box">
                {/* <img src={Students} alt="Pics"/> */}
                <span>Find Events near You</span>
            </div>
            <div className="events-box">
                {/* <img src={Students} alt="Pics"/> */}
                <span>Contact an Organizer</span>
            </div>
            <div className="events-box">
                {/* <img src={Students} alt="Pics"/> */}
                <span>Stay in Touch</span>
            </div>
            <div className="events-box">
                {/* <img src={Students} alt="Pics"/> */}
                <span>How you can contribute</span>
            </div>
            <div className="events-box">
                {/* <img src={Students} alt="Pics"/> */}
                <span>Moving Forward</span>
            </div>
       
        </div>
    )
}

function Poll(){
    return (
        <div className="poll-body">
            <div className="poll-question">
            <h1>Who will win the Kibra By-Election?</h1>
            </div>
            <div className="poll-answ">
                <button>McDonald Mariga</button>
                <button>Imran Okoth</button>
                <button>Edwin Olwalo</button>
            </div>
            <div className="poll-res">
                <p>Results</p>
                <span>McDonald Mariga: 0%</span>
                <span>Imran Okoth: 30%</span>
                <span>Edwin Olwalo: 1%</span>
                <span>Total Votes: 24,390</span>
            </div>

        </div>
    )
}

function DonateContainer(){
    return (
        <div className="donationContainer">
            <p>HUMANITY FIRST</p>
            <hr/>
            <h1>DONATE</h1>
            <div className="spanDonation">
                <span>K 500</span>
                <span>K 1,000</span>
                <span>K 5,000</span>
                <span>K 10,000</span>
            </div>
            <div className="donateBtn">
                <button>DONATE</button>
            </div>
        </div>
    )
}

function Issues(){
    const [header] = useState(['HEALTH','INFRASTRUCTURE','HOUSING','JOB CREATION','ENERGY','MANUFACTURING']);
    const [issues] = useState(['MEDICARE FOR ALL','BETTER INFRASTURCTURE','HOUSES FOR LOWER CLASS','YOUTH EMPLOYMENT','GREEN ENERGY, FUTURE OF KENYA','EMPLOYMENT DRIVE 2030'])
    return (
        <div className="issuesContainer">
            <p>ISSUES</p>
            <div className="platfromContainer">
                <p>EXPLORE OUR PLATFORM</p>
                <div className="issueMainBox">
                    {header.map((val,i) => {
                        return (
                            <div className="issueMain">
                            <div className="issuesSubContainer">
                                <div className="issuesBox">
                                    <img src={'d'} />
                                    <h3>{val}</h3>
                                </div>
                            </div>
                            <span>{issues[i]}</span>
                            <Link to="#">Learn More</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function JoinMovement(){
    return (
        <div>
            <div className="joinHeader">
             <h1>JOIN THE TEAM</h1>
            </div>
            <div className="joinForm">
                <input type="text" placeholder="Mobile Number"/>
                <input type="text" placeholder="County"/>
                <button onClick={ModalWarning}>I'M IN!</button>
            </div>
            <div className="joinImg">
                <img src={Willy}/>
            </div>
        </div>
    )
}

function SocialMedia(){
    return (
        <div className="mediaContainer">
            <h1>WILLIAM RUTO</h1>
            <div className="mediaLinks">
                <Link to="#">STORE</Link>
                <Link to="#">PRESS</Link>
                <Link to="#">CONTACT</Link>
                <Link to="#">BLOG</Link>
                <Link to="#">JOIN THE TEAM</Link>
            </div>
            <div className="mediaImgs">
                <Link to="#"><img src={'Fb'} alt="Facebook"/></Link>
                <Link to="#"><img src="" alt="Instagram"/></Link>
                <Link to="#"><img src="" alt="Twitter"/></Link>
                <Link to="#"><img src="" alt="tooutube"/></Link>
            </div>
            <div className="sponsor">
                <span>Paid for by Friends of William Ruto</span>
            </div>
            <div className="footer">
                <p>&copy;2019 Friends of William Ruto. All Rights Reserved. Privacy Policy.<br/> Nairobi, Kenya</p>
            </div>
        </div>
    )
}
function showContent(e){
    const divContainer = document.querySelector('.content');
    if(divContainer.className === 'content'){
        divContainer.classList.add('block-display');
    } else {
        divContainer.classList.remove('block-display');
    }
}

function ModalWarning(){ 
    alert('Sorry for the inconvienience please visit soon. Website Under Construction')
}
export default Main;