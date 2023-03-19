import React from 'react'
import './LandingPage.css'
import logoBG from '../images/logoBG.png'
import kittyImage from '../images/KittyFC.png'
import ProjectCards from './ProjectCards'
import logo from '../images/logo.png'



export default function LandingPage() {
 
  
  return (
      <div style={{
        textAlign:'center',
        backgroundColor: 'white'
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
           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum 
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum."</p>
               
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
          <h2>Projects</h2>

          <p style={{
            fontSize:"20px",
            textAlign:"center"
            
          }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum 
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum."</p>
           <div className="rounded" style={{backgroundColor: 'lightgray', width:"100%"}}>
                <div className="container" >
                      <ProjectCards  img={kittyImage} 
                      title = "Kitty Fighting Club" 
                      description = "In a world where cats stay on two legs and fight with fish as weapons."
                      link = "https://team-valstik.itch.io/kitty-fighting-club"
                      />
                   
                   <ProjectCards  img={logo} 
                      title = "Fling" 
                      description = "A game about a fling :))"
                      link = "https://team-valstik.itch.io/kitty-fighting-club"
                      />
                      
                 
                      <ProjectCards  img={logoBG} 
                      title = "BeeSieged" 
                      description = "A game about Bees"
                      link = "https://team-valstik.itch.io/kitty-fighting-club"
                      />
                    
                </div>
          </div>   
         </div>
        </div>   
        
  )
}
