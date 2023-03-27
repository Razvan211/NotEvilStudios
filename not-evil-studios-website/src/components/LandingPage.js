import React from 'react'
import './LandingPage.css'
import kittyImage from '../images/KittyFC.png'
import ProjectCards from './ProjectCards'
import logo from '../images/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function LandingPage() {
 
  
  return (
      <div className='body'>
         <div className='mission-container'>
           <h1 className='mission-title'>Not Evil Studios</h1>
           <p className='mission-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum 
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum."</p>
               
          </div>
         <div className='projects'>

          <h2 className='projects-title'>Projects</h2>

         <p className='projects-text'  >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum 
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum."</p>
               
           <div className='projects-container' >
                <Container fluid>
                  <Row style={{padding: '2%'}}>
                     <Col>
                     <ProjectCards  img={kittyImage} 
                      title = 'Kitty Fighting Club'
                      description = 'In a world where cats stay on two legs and fight with fish as weapons.'
                      link = '/catastrophy'
                      />
                     </Col>
                  </Row>
                      
                   <Row style={{padding: '2%'}}>
                     <Col>
                     <ProjectCards  img={logo} 
                      title = 'Fling'
                      description = 'A game about a fling :))'
                      link = '/fling'
                      />
                      
                     </Col>
                   </Row>
                   
                 
                  </Container>     
                    
                
          </div>   
         </div>
        </div>   
        
  )
}
