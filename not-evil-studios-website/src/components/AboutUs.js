import React from 'react'
import MemberCard from './MemberCard'

function AboutUs() {
  return (
    <div style={{
      textAlign:'center',
      backgroundColor:"white",
    }}>
      
       <div className='rounded'
        style={{
          border:'10px',
          borderColor:'black',
        backgroundColor: "gray",
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: "20px",
        marginTop: 20,
        width: '90%',
        color:'white'
      }}>
         <h1>Not Evil Studios</h1>
         <p style={{fontSize: "30px", fontStyle:"oblique"}}>Not Evil Studios is an indie game development studio based 
          in the Southwest of England. At the moment, our in progress
           projects include Fling, a 2d physics based mobile game, as 
           well as Kitty Fighting Club, a 3d PC game where Cats fight 
           one another with Fishy weapons.</p>
             
        </div>
        
        <div className='rounded'
         style={{
          marginTop: 20,
          backgroundColor:"gray",
          marginLeft:'auto',
          marginRight: 'auto',
          padding: '20px',
          width:'90%'
         }}>
          <h2>Team</h2>

        
           <div className="rounded" 
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
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center', padding:"20px"}}>
                     <MemberCard/>
                   </div>
                
                  
              
                   
                </div>
          </div>
          </div>  
        </div>
  )
}

export default AboutUs