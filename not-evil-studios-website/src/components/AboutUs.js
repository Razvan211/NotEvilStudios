import React from 'react'
import MemberCard from './MemberCard'
import './AboutUs.css'
import co from '../images/ChrisO.png'
import ch from '../images/ChrisH.png'
import cb from '../images/KuramuraLogo.png'
import rn from '../images/RazvanN.png'

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
               
                <div className="container" >
                     <MemberCard img={co} alt="photo with Chris Oliver" 
                     name="Christopher Oliver"
                     info="Co-Founder, CFO, Lead Sound Designer 
                     Gamer, Musician and Dad"
                     socials ="Facebook:" />
                     <MemberCard img={ch} alt="photo with Chris Hughes"
                     name="Chris Hughes"
                     info=" Lover of games, and a fan of quirky mechanics
                     Co-Founder, Technical lead, Lead Prrogrammer"
                     socials="Github"/>
                     <MemberCard img={cb} alt="photo with Kuramura"
                     name="Kuramura"
                     info="Tech Lead,  I love games with immersive stories and interesting gameplay mechanics
                     , I enjoy programming and problem solving"/>
                     <MemberCard img={rn} alt="photo with Razvan Nica"
                     name="Razvan Nica"
                     info="Web Developer, 3D Lead Artist, I love multiplayer games, I enjoy travelling"
                     socials="Facebook"
                     />
                     <MemberCard/>
                     <MemberCard/>
                     <MemberCard/>
                 </div>
              </div>
          </div>  
     </div>
  )
}

export default AboutUs