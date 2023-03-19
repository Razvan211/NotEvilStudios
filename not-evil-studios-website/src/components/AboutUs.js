import React from 'react'
import MemberCard from './MemberCard'

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
        
          <div className='team-container'
             style={{
             marginTop: 20,
          backgroundColor:"gray",
          marginLeft:'auto',
          marginRight: 'auto',
          padding: '20px',
          width:'90%'
         }}>
            <h2>Team</h2>

        
             <div className="team-grid" 
           style={{backgroundColor: "rgba(75, 75,75,1)", 
                   width:"100%", 
                   }}>
               
                <div className="row"  style={{
                    display:"flex",
                    justifyContent:"stretch",
                    marginLeft:'auto',
                    marginRight: 'auto',
                    padding: '50px'
                   
                    }}>
                     <MemberCard/>
                     <MemberCard/>
                     <MemberCard/>
                     <MemberCard/>
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