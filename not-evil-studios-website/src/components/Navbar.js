import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

function Navbar() {
    //updates the state
const [click, setClick] = useState(false);
    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
               <Link to='/' className='navbar-logo'>
                Not Evil Studios <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" />
               </Link>
               <div className='menu-icon'>
               <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
               </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar;