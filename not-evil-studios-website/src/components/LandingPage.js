import React from 'react'
import KittyCard from './KittyCard'



export default function LandingPage() {
 
  
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

          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum 
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum."</p>
           <div className="rounded" style={{backgroundColor: 'lightgray', width:"100%"}}>
                <div className="row"  style={{
                  
                    marginLeft:'auto',
                    marginRight: 'auto',
                    padding: '30px',
                    width:'95%'
                    }}>
                   <div className="col" style={{display:'flex', justifyContent:'center'}} >
                      <KittyCard />
                   </div>
                   <div className="col" style={{display:"flex", justifyContent:'center'}}>
                      <KittyCard />
                   </div>
                   <div className="col" style={{display:'flex', justifyContent:'center'}}>
                      <KittyCard />
                   </div>
                   
                </div>
          </div>   
         </div>
        </div>   
        
  )
}
