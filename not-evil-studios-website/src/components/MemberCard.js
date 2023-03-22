import React from 'react'
import './MemberCard.css'




function MemberCard(props) {
  return (
    <div className="team-card" >
    <img src={props.img} className="team-card-image" alt={props.alt}/>
    <div className="team-card-body">
      <h4 className="team-card-title">{props.name}</h4>
      <h5 className='team-card-roles'>{props.roles}</h5>
      <div className='team-card-about'>
      <p className="team-card-text" >{props.info}</p>
      </div>
      <div className='team-card-socials'>
      <p className="team-card-media" >
        <a href={props.twitter} rel='noreferrer' target="_blank" >
          <i icon="fa fa-Twitter"></i> twitter
        </a>
      </p>
      </div>
      
    </div>
  </div>
  )
}

export default MemberCard