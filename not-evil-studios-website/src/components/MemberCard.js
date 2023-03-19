import React from 'react'
import './MemberCard.css'



function MemberCard(props) {
  return (
    <div className="team-card" >
    <img src={props.img} className="team-card-image" alt={props.alt}/>
    <div className="team-card-body">
      <h3 className="team-card-title">{props.name}</h3>
      <p className="team-card-text" >{props.info}</p>
      <p className="team-card-socials" >{props.socials}</p>
     
    </div>
  </div>
  )
}

export default MemberCard