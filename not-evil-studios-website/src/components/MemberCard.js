import React from 'react'



function MemberCard(props) {
  return (
    <div className="card" style={{width: '30rem', backgroundColor:'gray', borderColor:'gray'}}>
    <img src={props.img} className="rounded-circle" alt={props.alt} style={{padding:'10px', backgroundColor:"white"}}/>
    <div className="card-body">
      <h3 className="card-title">{props.name}</h3>
      <p className="card-text" style={{fontSize:"25px"}}>{props.info}</p>
      <p className="card-text" style={{fontSize:"20px"}}>{props.socials}</p>
     
    </div>
  </div>
  )
}

export default MemberCard