import React from 'react'
import logo from '../images/logo.png'


function MemberCard() {
  return (
    <div className="card" style={{width: '30rem', backgroundColor:'gray', borderColor:'gray'}}>
    <img src={logo} className="rounded-circle" alt="logo" style={{padding:'10px', backgroundColor:"white"}}/>
    <div className="card-body">
      <h3 className="card-title">Team Member</h3>
      <p className="card-text" style={{fontSize:"25px"}}>About the Team Member</p>
      <p className="card-text" style={{fontSize:"20px"}}>Social Media:</p>
     
    </div>
  </div>
  )
}

export default MemberCard