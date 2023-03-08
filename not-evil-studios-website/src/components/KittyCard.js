import React from 'react'
import kitty from '../images/KittyFC.png'

function KittyCard() {
  return (
    <div className="card" style={{width: '30rem', backgroundColor:'gray', borderColor:'gray'}}>
  <img src={kitty}  alt="the main character and two enemies" style={{padding:'10px'}}/>
  <div className="card-body">
    <h5 className="card-title">Kitty Fighting Club</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://team-valstik.itch.io/kitty-fighting-club" rel='noreferrer' target={'_blank'} className="btn btn-dark">Go somewhere</a>
  </div>
</div>
  )
}

export default KittyCard