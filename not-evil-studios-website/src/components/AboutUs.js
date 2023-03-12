import React from 'react'
import MemberCard from './MemberCard'

function AboutUs() {
  return (
    <div style={{
      textAlign:'center'
    }}>
       <div className='rounded'
        style={{
        backgroundColor: "gray",
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: "20px",
        marginTop: 20,
        width: '90%',

        
      }}>
         <h1>Not Evil Studios</h1>
         <p style={{fontSize: "25px", fontStyle:"oblique"}}>Not Evil Studios is an indie game development studio based 
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

        
           <div className="rounded" style={{backgroundColor: 'lightgray', width:"100%", alignContent:'center', marginLeft:'auto',
                    marginRight: 'auto',}}>
                <div className="row"  style={{
                   alignContent:'center',
                    marginLeft:'auto',
                    marginRight: 'auto',
                    padding: '30px',
                    width:'100%'
                    }}>
                   <div className="col"  >
                      <MemberCard/>
                   </div>
                   <div className="col">
                   <MemberCard/>
                   </div>
                   <div className="col">
                   <MemberCard/>
                   </div>
                   
                </div>
          </div>
          </div>  
        </div>
  )
}

export default AboutUs