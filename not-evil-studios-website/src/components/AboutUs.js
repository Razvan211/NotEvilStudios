import React from 'react'
import MemberCard from './MemberCard'
import './AboutUs.css'
import co from '../images/ChrisO.png'
import ch from '../images/ChrisH.png'
import cb from '../images/KuramuraLogo.png'
import rn from '../images/RazvanN.png'
import kj from '../images/Kjie.png'
import jh from '../images/Josh.png'
import logo from '../images/logo.png'

function AboutUs() {
  return (
    <div className = "body" >
      
       <div className='mission-container'>

         <h1 className='mission-title'>Not Evil Studios</h1>
         <p className='mission-text'>Not Evil Studios is an indie game development studio based 
          in the Southwest of England. At the moment, our in progress
           projects include Fling, a 2d physics based mobile game, as 
           well as Kitty Fighting Club, a 3d PC game where Cats fight 
           one another with Fishy weapons.</p>
             
       </div>
        
          <div className='team'>

            <h1 className='team-title'>Team Members</h1>

        
             <div className="team-container">
               
             
                     <MemberCard img={co} alt="photo with Chris Oliver" 
                     name="Christopher Oliver"
                     roles = "Co-Founder, CFO, Lead Sound Designer Gamer"
                     info="Musician and Dad"
                     socials ="Facebook:" />
                     <MemberCard img={ch} alt="photo with Chris Hughes"
                     name="Chris Hughes"
                     roles =" Co-Founder, Technical lead, Lead Programmer"
                     info="Lover of games, and a fan of quirky mechanics"
                     socials="Github"/>
                     <MemberCard img={cb} alt="photo with Kuramura"
                     name="Kuramura"
                     roles = "Tech Lead, Co-Founder"
                     info="I love games with immersive stories and interesting gameplay mechanics
                     , I enjoy programming and problem solving"/>
                     <MemberCard img={rn} alt="photo with Razvan Nica"
                     name="Razvan Nica"
                     roles ="Web Developer, 3D Lead Artist, Co-Founder"
                     info="I love multiplayer games, I enjoy travelling"
                     socials="Facebook"
                     />
                     <MemberCard img={kj} alt="photo with Kjellon Morris"
                     name="Kjellon Morris"
                     roles="Co-Founder, Head of 2D Art"
                     info="Full time creative and mocha enthusiast."/>
                     <MemberCard img={jh} alt="photo with Josh Kinver"
                     name="Josh Kinver"
                     roles ="Co-Founder, Head of PR, Head of HR"
                     info="Emotional support dandelion, slight drama queen, lover of playing games, writing stories, and listening to music."
                     socials=""/>
                     <MemberCard img={logo} alt="photo with Phill"
                     />
                 </div>
              </div>
           
     </div>
  )
}

export default AboutUs