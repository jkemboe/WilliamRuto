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

import IndexImg from './img/WILLY.jpg';
import Students from './img/students.jpg';
import Willy from './img/WILLY1.jpg';

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
             <div className="donate-links">
             {/* <span onClick={showDonations}>DONATE</span> */}
            </div>
            <NavBar/>
           
         </div>
         <div className="position-animation">
            <Animation/>
         </div>
  
     </div>
     <div className="donation">
        <Donation/>
     </div>
     <VisionPage/>
     <Events/>
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
            The value of a conducive environment for effective learning is unquestionable. School infrastructure is a big part of the education experience and the eventual outcome of the education process. We must give our children the best for them to become the best. Good infrastructure provides a sense of safety and stability allowing children to concentrate on their studies.
            </p>
            <Link to="#">This is whatLinkWilliam Samoei Ruto Believes.</Link>
        </div>
    )
}
 
function Events(){
    return (
        <div className="events-body">
            <img src={Students}/>
            <div className="events-box"  onClick={showContent}>
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
            <div className="content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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